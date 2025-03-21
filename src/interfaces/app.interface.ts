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

export interface Location {
  latitude:  number;
  longitude: number;
}
