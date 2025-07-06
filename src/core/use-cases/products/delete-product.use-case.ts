import { AxiosError } from 'axios';
import findAPI from '../../../config/api/findapp.api';
import { ProductAPIResponse } from '../../../interfaces/app.interface';

export const deleteProductUseCase = async (id: string): Promise<ProductAPIResponse> => {
  try {
    const response = await findAPI.delete<ProductAPIResponse>(`products/${id}`);
    return { product: response.product };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw new Error('Error on deleting product');
  }
};
