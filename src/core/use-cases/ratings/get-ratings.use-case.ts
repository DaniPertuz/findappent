import findAPI from '../../../config/api/findapp.api';
import { RatingAPIResponse, RatingResponse } from '../../../interfaces/app.interface';

export const getRatingsUseCase = async (placeId: string): Promise<RatingAPIResponse> => {
  try {
    const response = await findAPI.get<RatingResponse>(`/ratings/place/${placeId}`);
    return { response };
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
