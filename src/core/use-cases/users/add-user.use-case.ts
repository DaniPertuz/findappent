import findAPI from '../../../config/api/findapp.api';
import { IUser } from '../../entities';

export const addUserUseCase = async (user: IUser): Promise<void> => {
  try {
    await findAPI.post<IUser>('/users', { user });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
