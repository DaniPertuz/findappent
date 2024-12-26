import { useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { ImagePickerAdapter } from '../../adapters/ImagePickerAdapter';

export const useGallery = () => {
    const [placeImages, setPlaceImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<ImagePickerResponse>();

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

    return {
        loading,
        placeImages,
        response,
        addGalleryPic,
        addGalleryPics,
        setPlaceImages,
    };
};
