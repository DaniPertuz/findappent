import { IFavorite, IPlace, IProduct, IRate, IService, IUser } from '../core/entities';

export interface LoginInterface {
  user:  IUser;
  token: string;
}

export enum roles {
  ADMIN  = 'admin',
  CLIENT = 'client',
  PLACE  = 'place'
}

export interface LoginData {
  email:    string;
  password: string;
}

export interface IRatingList {
  total: number;
  rates: IRate[];
}

export interface IRatingAverage {
  average: number;
}

export interface ISearch {
  keyword:       string;
  totalPlaces:   number;
  places:        IPlace[];
  totalProducts: number;
  products:      IProduct[];
}

export interface NumericRate {
  $numberDecimal: string;
}

export interface IFavorites {
  total:     number;
  favorites: IFavorite[];
}

export interface IServiceList {
  total:     number;
  services:  IService[];
}

export interface PlaceResponse {
  page:   number;
  limit:  number;
  total:  number;
  next:   string | null;
  prev:   string | null;
  places: IPlace[];
}

export interface PlaceAPIResponse {
  error?:    string;
  response?: PlaceResponse;
  status?:   string;
  place?:    IPlace;
}

export interface FavoriteResponse {
  page:      number;
  limit:     number;
  total:     number;
  next:      string | null;
  prev:      string | null;
  favorites: IFavorite[];
}

export interface FavoriteAPIResponse {
  error?:    string;
  response?: FavoriteResponse;
  status?:   string;
  favorite?: IFavorite;
}

export interface ServiceResponse {
  page:     number;
  limit:    number;
  total:    number;
  next:     string | null;
  prev:     string | null;
  services: IService[];
}

export interface ServiceAPIResponse {
  error?:    string;
  response?: ServiceResponse;
  status?:   string;
  service?:  IService;
}

export interface RatingResponse {
  page:    number;
  limit:   number;
  total:   number;
  next:    string | null;
  prev:    string | null;
  ratings: IRate[];
}

export interface RatingAPIResponse {
  error?:    string;
  response?: RatingResponse;
  status?:   string;
  rating?:   IRate;
}

export interface ProductResponse {
  page:     number;
  limit:    number;
  total:    number;
  next:     string | null;
  prev:     string | null;
  products: IProduct[];
}

export interface ProductAPIResponse {
  error?:    string;
  response?: ProductResponse;
  status?:   string;
  product?:  IProduct;
}

export interface UserAPIResponse {
  error?:  string;
  status?: string;
  user?:   IUser;
}

export interface Location {
  latitude:  number;
  longitude: number;
}
