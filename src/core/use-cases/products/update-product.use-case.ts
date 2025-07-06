import { AxiosError } from 'axios';
import { IProduct } from '../../entities';
import findAPI from '../../../config/api/findapp.api';
import { ProductAPIResponse } from '../../../interfaces/app.interface';

export const updateProductUseCase = async (url: string, product: Partial<IProduct>): Promise<ProductAPIResponse> => {
  try {
    const response = await findAPI.patch<ProductAPIResponse>(url, product);
    return { product: response.product };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw new Error('Error on updating product: ' + error.message);
  }
};
