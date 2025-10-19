import { useEffect, useState } from 'react';
import { ImagePickerAdapter } from '../../adapters/ImagePickerAdapter';
import { useGalleryStore, useAuthStore, usePlaceStore } from '../../store';
import { deleteCloudinaryPic, handleUpdateCloudinaryPic } from './useCloudinaryOperation';

interface UseProductGalleryProps {
  initialImages?: string[];
  onImagesChange?: (images: string[]) => void;
}

export const useProductGallery = ({ initialImages = [], onImagesChange }: UseProductGalleryProps = {}) => {
  const [productImages, setProductImages] = useState<string[]>(initialImages);
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
          return [uri];
        } else if (premium === 2) {
          const limit = 2;
          const newImages = [...prev, uri].slice(-limit);
          return newImages;
        } else {
          return [...prev, uri];
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
        if (premium === 1) {
          return [uris[0]];
        } else if (premium === 2) {
          const combined = [...prev, ...uris].slice(-2);
          return combined;
        } else {
          return [...prev, ...uris];
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

  useEffect(() => {
    console.log({ productImages, response });
  }, [productImages, response]);

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
