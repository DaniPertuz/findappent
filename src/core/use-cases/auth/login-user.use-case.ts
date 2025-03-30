import { AxiosError } from 'axios';
import findAPI from '../../../config/api/findapp.api';
import { AuthResponse, LoginInterface } from '../../../interfaces/app.interface';

export const authLoginUseCase = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const { token, user } = await findAPI.post<LoginInterface>('auth/login', {
      email,
      password,
    });

    return {
      token,
      user,
    };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { token: undefined, user: undefined };
  }
};
