import { useColorScheme } from 'react-native';

export const useColors = () => {
  const colorScheme = useColorScheme();

  return {
    darkBlue: '#207CFD',
    lightBlue: '#58D7FE',
    black: '#2F2F2F',
    brandMainText: '#081023',
    brandWhite: '#FAFAFA',
    white: colorScheme === 'dark' ? '#081023' : '#FAFAFA',
    mainText: colorScheme === 'dark' ? '#FAFAFA' : '#081023',
    primaryText: '#1F273A',
    secondaryText: '#5A5A5A',
    tertiaryText: '#858585',
    quaternaryText: '#DEDEDE',
    error: '#D13232',
    success: '#26DFB3',
    alert: '#F9C749',
    gray: '#9A9A9A',
  };
};
