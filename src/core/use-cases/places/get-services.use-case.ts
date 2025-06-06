import findAPI from '../../../config/api/findapp.api';
import { ServiceAPIResponse, ServiceResponse } from '../../../interfaces/app.interface';
import { IService } from '../../entities';

const adaptServiceResponse = (data: any): ServiceResponse => ({
  page: data.page,
  limit: data.limit,
  total: data.total,
  next: data.next,
  prev: data.prev,
  services: data.journeys as IService[],
});

export const getServicesUseCase = async (placeId: string): Promise<ServiceAPIResponse> => {
  try {
    const response = await findAPI.get<ServiceResponse>(`journeys/place/${placeId}`);
    const adaptedResponse = adaptServiceResponse(response);
    return { response: adaptedResponse };
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
