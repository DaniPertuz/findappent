import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

export class ImagePickerAdapter {
  static async takePicture(): Promise<ImagePickerResponse> {
    const response = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
      cameraType: 'back',
    });

    return response;
  }

  static async getPicturesFromLibrary(selectionLimit: number): Promise<ImagePickerResponse> {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
      selectionLimit,
    });

    return response;
  }
}
