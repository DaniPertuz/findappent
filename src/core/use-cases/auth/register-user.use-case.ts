import findAPI from '../../../config/api/findapp.api';
import { AuthAPIResponse, LoginInterface } from '../../../interfaces/app.interface';

export const authRegisterUseCase = async (name: string, email: string, password: string, role: string): Promise<AuthAPIResponse | undefined> => {
  try {
    const { token, user } = await findAPI.post<LoginInterface>('auth/register', {
      name,
      email,
      password,
      role,
    });

    return {
      response: {
        token,
        user,
      },
    };
  } catch (error: any) {
    return {
      response: {
        token: undefined,
        user: undefined,
      },
      error: error.data.message,
    };
  }
};
