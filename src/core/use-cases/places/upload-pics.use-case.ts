import { ImagePickerResponse } from 'react-native-image-picker';
import { handleUpdateCloudinaryPic } from '../../../presentation/hooks/useCloudinaryOperation';

export const uploadPics = async (data: ImagePickerResponse, userId: string): Promise<string[]> => await handleUpdateCloudinaryPic(data, userId, false, false, undefined);
