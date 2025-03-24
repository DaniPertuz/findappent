import { AxiosError } from 'axios';
import { IProduct } from '../../entities';
import findAPI from '../../../config/api/findapp.api';
import { ProductAPIResponse } from '../../../interfaces/app.interface';

export const deleteProductUseCase = async (product: IProduct): Promise<ProductAPIResponse> => {
  try {
    const response = await findAPI.delete<ProductAPIResponse>(`products/${product.name}`);
    return { product: response.product };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw new Error('Error desconocido al eliminar producto');
  }
};
