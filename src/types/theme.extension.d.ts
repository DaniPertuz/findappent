import { MD3Colors } from 'react-native-paper';

declare module 'react-native-paper' {
  interface ThemeColors extends MD3Colors {
    mainText: string;
    darkBlue?: string;
    lightBlue?: string;
    black?: string;
    white?: string;
    success?: string;
    alert?: string;
  }
}
