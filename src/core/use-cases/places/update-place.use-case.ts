import findAPI from '../../../config/api/findapp.api';
import { PlaceAPIResponse } from '../../../interfaces/app.interface';
import { IPlace } from '../../entities';

export const updatePlace = async (id: string, data: Partial<IPlace>): Promise<PlaceAPIResponse> => {
  try {
    const response = await findAPI.patch<IPlace>(`places/place/${id}`, data);
    return { place: response };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
