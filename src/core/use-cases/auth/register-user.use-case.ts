import { AxiosError } from 'axios';
import findAPI from '../../../config/api/findapp.api';
import { LoginInterface } from '../../../interfaces/app.interface';

export const authRegisterUseCase = async (name: string, email: string, password: string, role: string) => {
  try {
    const { token, user } = await findAPI.post<LoginInterface>('auth/register', {
      name,
      email,
      password,
      role,
    });

    return {
      token,
      user,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
