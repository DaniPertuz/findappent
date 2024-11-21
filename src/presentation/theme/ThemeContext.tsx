import React, { createContext, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';

const { LightTheme: NavLightTheme, DarkTheme: NavDarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CustomLightTheme = {
  ...NavLightTheme,
  colors: {
    ...NavLightTheme.colors,
    darkBlue: '#207CFD',
    lightBlue: '#58D7FE',
    black: '#2F2F2F',
    white: '#FAFAFA',
    mainText: '#081023',
    primaryText: '#1F273A',
    secondaryText: '#5A5A5A',
    tertiaryText: '#858585',
    quaternaryText: '#DEDEDE',
    error: '#D13232',
    success: '#26DFB3',
    alert: '#F9C749',
  },
};

const CustomDarkTheme = {
  ...NavDarkTheme,
  colors: {
    ...NavDarkTheme.colors,
    darkBlue: '#207CFD',
    lightBlue: '#58D7FE',
    black: '#2F2F2F',
    white: '#081023',
    mainText: '#FAFAFA',
    primaryText: '#1F273A',
    secondaryText: '#5A5A5A',
    tertiaryText: '#858585',
    quaternaryText: '#DEDEDE',
    error: '#D13232',
    success: '#26DFB3',
    alert: '#F9C749',
  },
};

export const ThemeContext = createContext({
  isDark: false,
  theme: NavLightTheme,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? CustomDarkTheme : CustomLightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider value={{
          isDark,
          theme,
        }}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>

  );
};
