import { NumericRate } from '../../interfaces/app.interface';

export interface IProduct {
  _id?:        string;
  name:        string;
  description: string;
  categories:  string[];
  currency:    string;
  price:       number;
  place:       string;
  rate?:       NumericRate;
  imgs?:       string[];
  status?:     boolean;
}
