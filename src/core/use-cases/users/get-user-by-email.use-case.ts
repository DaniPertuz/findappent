import findAPI from '../../../config/api/findapp.api';
import { UserAPIResponse } from '../../../interfaces/app.interface';

export const getUserByEmailUseCase = async (email: string): Promise<UserAPIResponse> => {
  try {
    const resp = await findAPI.get<UserAPIResponse>('/users/email', { params: { email } });
    return { user: resp.user };
  } catch (error) {
    return { error: `${error}` };
  }
};
