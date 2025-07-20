import { ImagePickerResponse, launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';

export class ImagePickerAdapter {
  static async takeMultimedia(mediaType: MediaType): Promise<ImagePickerResponse> {
    const response = await launchCamera({
      mediaType,
      quality: 0.8,
      cameraType: 'back',
    });

    return response;
  }

  static async getMultimediaFromLibrary(mediaType: MediaType, selectionLimit: number): Promise<ImagePickerResponse> {
    const response = await launchImageLibrary({
      mediaType,
      quality: 0.8,
      selectionLimit,
    });

    return response;
  }
}
