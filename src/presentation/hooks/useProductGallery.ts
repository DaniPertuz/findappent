import { useEffect, useState } from 'react';
import { ImagePickerAdapter } from '../../adapters/ImagePickerAdapter';
import { ProductImage } from '../../core/entities';
import { useGalleryStore, useAuthStore, usePlaceStore } from '../../store';
import { deleteCloudinaryPic, handleUpdateCloudinaryPic } from './useCloudinaryOperation';

interface UseProductGalleryProps {
  initialImages?: ProductImage[];
  onImagesChange?: (images: ProductImage[]) => void;
}

export const useProductGallery = ({ initialImages = [], onImagesChange }: UseProductGalleryProps = {}) => {
  const [productImages, setProductImages] = useState<ProductImage[]>(initialImages);
  const [loading, setLoading] = useState(false);
  const user = useAuthStore(state => state.authResponse.user);
  const { response, setResponse, imagesToDelete, clearImagesToDelete } = useGalleryStore();
  const premium = usePlaceStore(state => state.place?.premium || 1);

  useEffect(() => {
    if (onImagesChange) {
      onImagesChange(productImages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productImages]);

  const addProductPhoto = async () => {
    setLoading(true);
    try {
      const resp = await ImagePickerAdapter.takeMultimedia('photo');
      if (resp.didCancel || !resp.assets?.[0].uri) { return; }

      const uri = resp.assets[0].uri;

      setProductImages(prev => {
        if (premium === 1) {
          return [{ main: true, img: uri }];
        } else if (premium === 2) {
          const limit = 2;
          const newImages = [...prev, { main: false, img: uri }].slice(-limit);
          return newImages;
        } else {
          return [...prev, { main: false, img: uri }];
        }
      });
      setResponse(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addProductPics = async (limit: number) => {
    setLoading(true);
    try {
      const resp = await ImagePickerAdapter.getMultimediaFromLibrary('photo', limit);
      if (resp.didCancel || !resp.assets?.length) { return; }

      const uris = resp.assets.map(a => a.uri).filter((u): u is string => !!u);
      setProductImages(prev => {
        const productImageObjs = uris.map(uri => ({ main: false, img: uri }));
        if (premium === 1) {
          return [productImageObjs[0]];
        } else if (premium === 2) {
          const combined = [...prev, ...productImageObjs].slice(-2);
          return combined;
        } else {
          return [...prev, ...productImageObjs];
        }
      });
      setResponse(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadPics = async (oldPics: string[]) => {
    setLoading(true);
    if (!response) { return; }

    try {
      if (imagesToDelete?.length) {
        await Promise.all(imagesToDelete.map(img => deleteCloudinaryPic(img)));
      }

      const remainingPics = oldPics.filter(pic => !imagesToDelete.includes(pic));
      const updatedPics = await handleUpdateCloudinaryPic({
        data: response,
        userId: user?._id!,
        profile: false,
        deleteExisting: false,
        existingImg: remainingPics,
      });

      clearImagesToDelete();
      return updatedPics;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    productImages,
    response,
    setProductImages,
    addProductPhoto,
    addProductPics,
    uploadPics,
  };
};
