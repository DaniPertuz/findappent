import { IPlace, IUser } from '.';

export interface IFavorite {
  place:     IPlace;
  user:      IUser;
  createdAt: string;
}
