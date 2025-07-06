import { AxiosError } from 'axios';
import { IProduct } from '../../entities';
import { ProductAPIResponse } from '../../../interfaces/app.interface';
import findAPI from '../../../config/api/findapp.api';

export const addProductUseCase = async (product: IProduct): Promise<ProductAPIResponse> => {
  try {
    const response = await findAPI.post<ProductAPIResponse>('products', product);
    return { product: response.product };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw new Error('Error on add product');
  }
};
