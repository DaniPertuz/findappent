import { Location, NumericRate } from '../../interfaces/app.interface';

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
  videos:      string[];
  rate?:       NumericRate;
  status:      boolean;
}
