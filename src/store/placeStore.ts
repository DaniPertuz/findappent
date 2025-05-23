import { create } from 'zustand';
import { IPlace, IUser } from '../core/entities';
import * as PlaceUseCases from '../core/use-cases/places';
import * as RatingsUseCases from '../core/use-cases/ratings';
import * as UsersUseCases from '../core/use-cases/users';
import { FavoriteResponse, RatingResponse, ServiceResponse } from '../interfaces/app.interface';
import { deleteCloudinaryPic } from '../presentation/hooks/useCloudinaryOperation';

export interface PlaceState {
  place: IPlace | null;
  favorites: FavoriteResponse;
  ratings: RatingResponse;
  ratingAverage: number;
  services: ServiceResponse;
  getPlaceByEmail: (email: string) => Promise<IPlace | undefined>;
  getFavorites: (placeId: string) => Promise<FavoriteResponse | undefined>;
  getRatingAverage: (placeId: string) => Promise<number>;
  getRatings: (placeId: string) => Promise<RatingResponse | undefined>;
  getRatingsByUrl: (url: string) => Promise<RatingResponse | undefined>;
  getServices: (placeId: string) => Promise<ServiceResponse | undefined>;
  registerPlace: (place: IPlace) => Promise<void>;
  updatePlace: (id: string, data: Partial<IPlace>) => Promise<IPlace | undefined>;
  updatePlacePhoto: (id: string, photoUrl: string) => Promise<IPlace | undefined>;
  updateUserPhoto: (id: string, photoUrl: string) => Promise<IUser>;
  removePic: (url: string) => Promise<void>;
}

const favoriteInit = {
  page: 0,
  limit: 0,
  total: 0,
  next: null,
  prev: null,
  favorites: [],
};

const ratingInit = {
  page: 0,
  limit: 0,
  total: 0,
  next: null,
  prev: null,
  ratings: [],
};

const serviceInit = {
  page: 0,
  limit: 0,
  total: 0,
  next: null,
  prev: null,
  services: [],
};

export const usePlaceStore = create<PlaceState>()((set) => ({
  place: null,
  favorites: favoriteInit,
  ratingAverage: 0,
  ratings: ratingInit,
  services: serviceInit,
  getPlaceByEmail: async (email: string) => {
    const resp = await PlaceUseCases.getPlaceByEmail(email);

    if (resp._id === '') {
      set({ place: null });
      return;
    }

    set({ place: resp });

    return resp;
  },
  getFavorites: async (placeId: string) => {
    const { error, response } = await PlaceUseCases.getFavoritesUseCase(placeId);

    if (error) {
      set({ favorites: favoriteInit });
      return;
    }

    set({ favorites: response });

    return response;
  },
  getRatingAverage: async (placeId: string) => {
    const average = await RatingsUseCases.getRatingsAverageUseCase(placeId);

    set({ ratingAverage: average });

    return average;
  },
  getRatings: async (placeId: string) => {
    const { error, response } = await RatingsUseCases.getRatingsUseCase(placeId);

    if (error) {
      set({ ratings: ratingInit });
      return;
    }

    set({ ratings: response });

    return response;
  },
  getRatingsByUrl: async (url: string) => {
    const { error, response } = await RatingsUseCases.getRatingsUseCase(url.replace('ratings/place/', ''));
    if (error) {
      set({ ratings: ratingInit });
      return;
    }

    set({ ratings: response });
    return response;
  },
  getServices: async (placeId: string) => {
    const { error, response } = await PlaceUseCases.getServicesUseCase(placeId);

    if (error) {
      set({ services: serviceInit });
      return;
    }

    set({ services: response });

    return response;
  },
  registerPlace: async (place: IPlace) => {
    await PlaceUseCases.registerPlace(place);
  },
  updatePlace: async (id: string, data: Partial<IPlace>) => {
    const { place } = await PlaceUseCases.updatePlace(id, data);

    set({ place });

    return place;
  },
  updatePlacePhoto: async (id: string, photoUrl: string) => {
    const { place } = await PlaceUseCases.updatePlacePhoto(id, photoUrl);

    set({ place });

    return place;
  },
  updateUserPhoto: async (id: string, photoUrl: string) => {
    return await UsersUseCases.updatePhoto(id, photoUrl);
  },
  removePic: async (url: string) => {
    await deleteCloudinaryPic(url);
  },
}));
