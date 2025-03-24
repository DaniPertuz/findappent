import findAPI from '../../../config/api/findapp.api';

export const getRatingsAverageUseCase = async (placeId: string): Promise<number> => {
  try {
    const { average } = await findAPI.get<{ average: number; }>(`/place/avg/${placeId}`);
    return average;
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
