import { AxiosError } from 'axios';
import { ProductAPIResponse, ProductResponse } from '../../../interfaces/app.interface';
import findAPI from '../../../config/api/findapp.api';

export const getProductsUseCase = async (url: string): Promise<ProductAPIResponse> => {
  try {
    const response = await findAPI.get<ProductResponse>(url);
    return { response };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw new Error('Error on getting products');
  }
};
