import findAPI from '../../../config/api/findapp.api';
import { IPlace } from '../../entities';

export const registerPlace = async (place: IPlace): Promise<void> => {
  try {
    const {
      name,
      description,
      category,
      address,
      email,
      coords,
      phone,
      whatsapp,
      instagram,
      city,
      cityState,
      country,
      schedule,
      photo,
      premium,
      pics,
      rate,
      status,
    } = place;

    await findAPI.post<IPlace>('/places', {
      name,
      description,
      category,
      address,
      email,
      coords,
      phone,
      whatsapp,
      instagram,
      city,
      cityState,
      country,
      schedule,
      photo,
      premium,
      pics,
      rate,
      status,
    });
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};
