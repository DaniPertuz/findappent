import Geocoder from '../../config/api/geocoder';

export const getCoords = async (address: string) => {
  const { results } = await Geocoder.from(address);
  const { lat, lng } = results[0].geometry.location;
  return { lat, lng };
};
