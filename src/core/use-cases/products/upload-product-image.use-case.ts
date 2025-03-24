import { ImagePickerResponse } from 'react-native-image-picker';
import { handleUpdateCloudinaryPic } from '../../../presentation/hooks/useCloudinaryOperation';
import { getProductsUseCase } from './get-products.use-case';

export const uploadProductImage = async (data: ImagePickerResponse, productId: string) => {
  const { product } = await getProductsUseCase(productId);
  const pics = await handleUpdateCloudinaryPic(data, true, product?.img);
  return pics[0];
};
