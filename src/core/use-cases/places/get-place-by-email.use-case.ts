import findAPI from '../../../config/api/findapp.api';
import { IPlace } from '../../entities';

export const getPlaceByEmail = async (email: string): Promise<IPlace> => {
  try {
    const response = await findAPI.get<IPlace>(`places/email/${email}`);
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
