
export interface IUser {
  _id?:      string;
  name:      string;
  email:     string;
  password:  string;
  role:      roles | string;
  status:    boolean;
  photo?:    string;
}

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

export interface IRate {
  rate:      number;
  comments:  string;
  place?:    IPlace;
  user?:     IUser;
  createdAt: string;
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

export interface IPlace {
  _id?:        string;
  name:        string;
  description: string;
  category:    string;
  address:     string;
  email:       string;
  coords:      Location;
  phone:       number;
  whatsapp?:   number;
  instagram?:  string;
  city:        string;
  cityState:   string;
  country:     string;
  schedule:    string[];
  photo?:      string;
  premium?:    number;
  pics:        string[];
  rate?:       NumericRate;
  status:      boolean;
}
export interface NumericRate {
  $numberDecimal: string;
}

export interface IProduct {
  _id?:        string;
  name:        string;
  description: string;
  category:    string;
  price:       number;
  place:       string;
  rate?:       NumericRate;
  img?:        string;
  status?:     boolean;
}

export interface IFavorites {
  total:     number;
  favorites: IFavorite[];
}

export interface IFavorite {
  place:     IPlace;
  createdAt: string;
}

export interface IHistory {
  total:     number;
  services:  IService[];
}

export interface IService {
  createdAt: string;
  place:     IPlace;
  search:    string;
  user:      string;
}

export interface Location {
  latitude:  number;
  longitude: number;
}
