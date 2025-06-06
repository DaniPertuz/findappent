
import { useEffect } from 'react';
import { useAuthStore, usePlaceStore } from '../../store';

export const usePlaceData = () => {
  const { getPlaceByEmail, getFavorites, getRatings, getRatingsByUrl, getRatingAverage, getServices, place, favorites, ratings, ratingAverage, services } = usePlaceStore();
  const user = useAuthStore(state => state.authResponse.user);

  const fetchPlaceData = async () => {
    await getPlaceByEmail(user?.email!);
  };

  useEffect(() => {
    fetchPlaceData();
  }, [user]);

  useEffect(() => {
    if (place?._id) {
      getFavorites(place._id);
      getRatingAverage(place._id);
      getRatings(place._id);
      getServices(place._id);
    }
  }, [place]);

  return {
    place,
    favorites,
    ratingAverage,
    ratings,
    services,
    getRatingsByUrl,
  };
};
