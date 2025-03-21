import { NumericRate } from '../../interfaces/app.interface';

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
