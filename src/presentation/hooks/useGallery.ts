import { useEffect, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { ImagePickerAdapter } from '../../adapters/ImagePickerAdapter';
import { useAuthStore, useGalleryStore, usePlaceStore } from '../../store';
import { deleteCloudinaryPic, handleUpdateCloudinaryPic } from './useCloudinaryOperation';

export const useGallery = () => {
  const [profilePicture, setProfilePicture] = useState<ImagePickerResponse>();
  const [placeImages, setPlaceImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const user = useAuthStore(state => state.authResponse.user);
  const setUser = useAuthStore(state => state.setUser);
  const { response, setResponse, imagesToDelete, clearImagesToDelete } = useGalleryStore();
  const { place, updatePlacePhoto, updateUserPhoto } = usePlaceStore();

  const selectProfilePicture = async () => {
    const picture = await ImagePickerAdapter.getPicturesFromLibrary(1);

    if (!picture || !picture.assets) { return; }

    setProfilePicture(picture);
  };

  const takeProfilePicture = async () => {
    const picture = await ImagePickerAdapter.takePicture();

    if (!picture || !picture.assets) { return; }

    setProfilePicture(picture);
  };

  const addGalleryPic = async () => {
    setLoading(true);
    try {
      const resp = await ImagePickerAdapter.getPicturesFromLibrary(1);
      if (resp.didCancel || !resp.assets || resp.assets.length === 0) {
        return;
      }

      const uri = resp.assets![0].uri;

      setPlaceImages([uri!]);
      setResponse(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addGalleryPics = async (limit: number) => {
    setLoading(true);
    try {
      const resp = await ImagePickerAdapter.getPicturesFromLibrary(limit);

      if (resp.didCancel || !resp.assets || resp.assets.length === 0) {
        return;
      }

      setPlaceImages(prevImages => [
        ...prevImages,
        ...(resp.assets?.map(asset => asset.uri).filter((uri): uri is string => !!uri) || []),
      ]);
      setResponse(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addPhoto = async () => {
    setLoading(true);
    try {
      const resp = await ImagePickerAdapter.takePicture();
      if (resp.didCancel || !resp.assets![0].uri) { return; }

      const uri = resp.assets![0].uri;

      setPlaceImages(prevImages => [...prevImages, uri]);
      setResponse(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadPicture = async () => {
    setLoading(true);
    try {
      if (!profilePicture) {
        setLoading(false);
        return;
      }

      const img = await handleUpdateCloudinaryPic(profilePicture, user?._id!, true, true, user?.photo);

      const [respPlace, respUser] = await Promise.all([
        updatePlacePhoto(place?._id!, img[0]),
        updateUserPhoto(user?._id!, img[0]),
      ]);

      if (!respPlace || !respUser) {
        setLoading(false);
        return;
      }
      if (respUser) {
        setUser(respUser);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadPics = async (oldPics: string[]) => {
    setLoading(true);
    if (!response) {
      return;
    }

    try {
      if (imagesToDelete && imagesToDelete.length > 0) {
        await Promise.all(imagesToDelete.map(img => deleteCloudinaryPic(img)));
      }
      const remainingPics = oldPics.filter(pic => !imagesToDelete.includes(pic));
      const updatedPics = await handleUpdateCloudinaryPic(
        response,
        user?._id!,
        false,
        false,
        remainingPics,
      );

      clearImagesToDelete();

      return updatedPics;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPlaceImages(place?.pics || []);
  }, [place]);

  return {
    loading,
    placeImages,
    profilePicture,
    response,
    addGalleryPic,
    addGalleryPics,
    addPhoto,
    selectProfilePicture,
    setPlaceImages,
    setProfilePicture,
    takeProfilePicture,
    uploadPics,
    uploadPicture,
  };
};
