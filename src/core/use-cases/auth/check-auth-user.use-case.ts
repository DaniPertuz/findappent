import { AxiosError } from 'axios';
import findAPI from '../../../config/api/findapp.api';
import { LoginInterface } from '../../../interfaces/app.interface';
import { IUser } from '../../entities';

export const checkAuthUserUseCase = async (userAuth: IUser | null) => {
  try {
    const { token, user } = await findAPI.post<LoginInterface>('/auth/check-status', userAuth ? { userAuth } : {});

    return {
      token,
      user,
    };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
