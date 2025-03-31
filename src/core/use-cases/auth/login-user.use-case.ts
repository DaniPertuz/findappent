import findAPI from '../../../config/api/findapp.api';
import { AuthAPIResponse, LoginInterface } from '../../../interfaces/app.interface';

export const authLoginUseCase = async (email: string, password: string): Promise<AuthAPIResponse | undefined> => {
  try {
    const { token, user } = await findAPI.post<LoginInterface>('auth/login', {
      email,
      password,
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
