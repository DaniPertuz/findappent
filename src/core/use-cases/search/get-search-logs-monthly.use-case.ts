import findAPI from '../../../config/api/findapp.api';
import { SearchMonthly } from '../../../interfaces/app.interface';

export const getSearchMonthly = async (year: string, month: string, placeId: string): Promise<SearchMonthly[]> => {
  try {
    const response = await findAPI.get<SearchMonthly[]>(`search/logs/monthly/${year}/${month}/${placeId}`);
    return response;
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
