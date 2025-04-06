
import { useEffect } from 'react';
import { usePlaceStore } from '../../store/placeStore';
import { useAuthStore } from '../../store/authStore';

export const usePlaceData = () => {
  const { getPlaceByEmail, getFavorites, getRatings, getRatingsByUrl, getRatingAverage, place, favorites, ratings, ratingAverage } = usePlaceStore();
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
    }
  }, [place]);

  return {
    place,
    favorites,
    ratingAverage,
    ratings,
    getRatingsByUrl,
  };
};
