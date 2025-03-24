import { ImagePickerResponse } from 'react-native-image-picker';
import findAPI from '../../../config/api/findapp.api';
import { handleUpdateCloudinaryPic } from '../../../presentation/hooks/useCloudinaryOperation';
import { getUserByIDUseCase } from './get-user-by-id.use-case';

export const updatePhoto = async (data: ImagePickerResponse, userId: string): Promise<string> => {
  const { user } = await getUserByIDUseCase(userId);
  const pic = await handleUpdateCloudinaryPic(data, true, user?.photo);
  const secure_url = pic[0];

  await findAPI.put(`/users/${userId}`, { photo: secure_url });

  return secure_url;
};
