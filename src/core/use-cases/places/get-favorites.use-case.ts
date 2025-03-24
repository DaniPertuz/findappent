import findAPI from '../../../config/api/findapp.api';
import { FavoriteAPIResponse, FavoriteResponse } from '../../../interfaces/app.interface';

export const getFavoritesUseCase = async (placeId: string): Promise<FavoriteAPIResponse> => {
  try {
    const response = await findAPI.get<FavoriteResponse>(`/favorites/place/${placeId}`);
    return { response };
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
