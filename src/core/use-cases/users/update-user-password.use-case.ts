import findAPI from '../../../config/api/findapp.api';
import { IUser } from '../../entities';

export const updateUserPasswordUseCase = async (email: string, password: string): Promise<void> => {
  try {
    await findAPI.put<IUser>('/users/user/password', { email, password });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
