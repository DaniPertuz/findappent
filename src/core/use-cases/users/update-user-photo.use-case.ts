import findAPI from '../../../config/api/findapp.api';
import { IUser } from '../../entities';

export const updatePhoto = async (userId: string, photoUrl: string): Promise<IUser> => {
  try {
    const resp = await findAPI.patch<IUser>(`/users/${userId}`, { photo: photoUrl });
    return resp;
  } catch (error) {
    throw new Error(`Error updating user photo: ${error}`);
  }
};
