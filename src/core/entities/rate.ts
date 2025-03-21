import { IPlace, IUser } from '.';

export interface IRate {
  rate:      number;
  comments:  string;
  place?:    IPlace;
  user?:     IUser;
  createdAt: string;
}
