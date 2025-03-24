import findAPI from '../../../config/api/findapp.api';
import { PlaceAPIResponse } from '../../../interfaces/app.interface';
import { IPlace } from '../../entities';

export const updatePlace = async (id: string, data: IPlace): Promise<PlaceAPIResponse> => {
  try {
    const response = await findAPI.put<IPlace>(`/places/${id}`, data);
    return { place: response };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
