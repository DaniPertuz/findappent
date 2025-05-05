import findAPI from '../../../config/api/findapp.api';
import { IUser } from '../../entities';

export const updateUserUseCase = async (userID: string, user: IUser): Promise<void> => {
  try {
    await findAPI.patch<IUser>(`/users/${userID}`, { user });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
