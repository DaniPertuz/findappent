import findAPI from '../../../config/api/findapp.api';
import { UserAPIResponse } from '../../../interfaces/app.interface';

export const getUserByIDUseCase = async (userID: string): Promise<UserAPIResponse> => {
  try {
    const resp = await findAPI.get<UserAPIResponse>(`users/${userID}`);
    return { user: resp.user };
  } catch (error) {
    return { error: `${error}` };
  }
};
