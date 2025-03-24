import { AxiosError } from 'axios';
import { IProduct } from '../../entities';
import findAPI from '../../../config/api/findapp.api';
import { ProductAPIResponse } from '../../../interfaces/app.interface';

export const updateProductUseCase = async (productName: string, product: IProduct): Promise<ProductAPIResponse> => {
  try {
    const response = await findAPI.put<ProductAPIResponse>(`products/${productName}`, product);
    return { product: response.product };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw new Error('Error desconocido al actualizar producto');
  }
};
