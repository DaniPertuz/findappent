import { useEffect, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { ImagePickerAdapter } from '../../adapters/ImagePickerAdapter';
import { useAuthStore } from '../../store/authStore';
import { usePlaceStore } from '../../store/placeStore';
import { handleUpdateCloudinaryPic } from './useCloudinaryOperation';

export const useGallery = () => {
  const [profilePicture, setProfilePicture] = useState<ImagePickerResponse>();
  const [placeImages, setPlaceImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ImagePickerResponse>();
  const user = useAuthStore(state => state.authResponse.user);
  const setUser = useAuthStore(state => state.setUser);
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
      if (resp.didCancel || !resp.assets![0].uri) { return; }

      const uri = resp.assets![0].uri;

      setPlaceImages([uri]);
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

      if (!resp.assets || resp.didCancel) { return; }

      const uris = resp.assets.map((asset) => asset.uri).filter(Boolean) as string[];

      setPlaceImages(prevImages => [...prevImages, ...uris]);
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

      const img = await handleUpdateCloudinaryPic(profilePicture, user?._id!, true, user?.photo);

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
    uploadPicture,
  };
};
