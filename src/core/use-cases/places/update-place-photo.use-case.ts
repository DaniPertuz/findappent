import findAPI from '../../../config/api/findapp.api';
import { PlaceAPIResponse } from '../../../interfaces/app.interface';
import { IPlace } from '../../entities';

export const updatePlacePhoto = async (id: string, photoURL: string): Promise<PlaceAPIResponse> => {
  try {
    const response = await findAPI.patch<IPlace>(`places/photo/${id}`, { photo: photoURL });
    return { place: response };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
