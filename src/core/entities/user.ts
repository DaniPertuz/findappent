import { roles } from '../../interfaces/app.interface';

export interface IUser {
  _id?:     string;
  name:     string;
  email:    string;
  password: string;
  role:     roles | string;
  status:   boolean;
  photo?:   string;
}
