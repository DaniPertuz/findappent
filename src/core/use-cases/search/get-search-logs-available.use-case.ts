import findAPI from '../../../config/api/findapp.api';
import { SearchAvailable } from '../../../interfaces/app.interface';

export const getSearchAvailable = async ( placeId: string): Promise<SearchAvailable[]> => {
  try {
    const response = await findAPI.get<SearchAvailable[]>(`search/logs/available/${placeId}`);
    return response;
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
