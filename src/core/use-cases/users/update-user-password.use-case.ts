import findAPI from '../../../config/api/findapp.api';
import { IUser } from '../../entities';

export const updateUserPasswordUseCase = async (email: string, password: string): Promise<IUser> => {
  try {
    const resp = await findAPI.patch<IUser>('users/user/password', { email, password });
    return resp;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
