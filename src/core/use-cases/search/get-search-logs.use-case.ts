import findAPI from '../../../config/api/findapp.api';
import { Search } from '../../../interfaces/app.interface';

export const getSearch = async (year: number, month: number, placeId: string): Promise<Search> => {
  try {
    const response = await findAPI.get<Search>(`search/logs/${year}/${month}/${placeId}`);
    return response;
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
