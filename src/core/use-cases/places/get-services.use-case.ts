import findAPI from '../../../config/api/findapp.api';
import { ServiceAPIResponse, ServiceResponse } from '../../../interfaces/app.interface';

export const getServicesUseCase = async (placeId: string): Promise<ServiceAPIResponse> => {
  try {
    const response = await findAPI.get<ServiceResponse>(`/services/place/${placeId}`);
    return { response };
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
