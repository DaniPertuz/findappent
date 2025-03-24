import findAPI from '../../../config/api/findapp.api';
import { IUser } from '../../entities';

export const deleteUserUseCase = async (userID: string): Promise<void> => {
  try {
    await findAPI.put<IUser>(`/users/${userID}`, {
      id: userID,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
