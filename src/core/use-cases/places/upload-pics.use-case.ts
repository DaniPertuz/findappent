import { ImagePickerResponse } from 'react-native-image-picker';
import { handleUpdateCloudinaryPic } from '../../../presentation/hooks/useCloudinaryOperation';

export const uploadPics = async (data: ImagePickerResponse): Promise<string[]> => await handleUpdateCloudinaryPic(data);
