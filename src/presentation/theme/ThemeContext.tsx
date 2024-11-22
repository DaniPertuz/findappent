import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { useColors } from './colors';

const { LightTheme: NavLightTheme, DarkTheme: NavDarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  theme: NavLightTheme,
  setDarkTheme: () => { },
  setLightTheme: () => { },
  setSystemTheme: () => { },
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const [useSystemTheme, setUseSystemTheme] = useState(true);
  const baseColors = useColors();

  const CustomLightTheme = {
    ...NavLightTheme,
    colors: {
      ...NavLightTheme.colors,
      ...baseColors,
    },
  };

  const CustomDarkTheme = {
    ...NavDarkTheme,
    colors: {
      ...NavDarkTheme.colors,
      ...baseColors,
    },
  };
  const theme = isDark ? CustomDarkTheme : CustomLightTheme;

  const setLightTheme = () => {
    setIsDark(false);
    setUseSystemTheme(false);
  };

  const setDarkTheme = () => {
    setIsDark(true);
    setUseSystemTheme(false);
  };

  const setSystemTheme = () => {
    setIsDark(colorScheme === 'dark');
    setUseSystemTheme(true);
  };

  useEffect(() => {
    if (useSystemTheme) {
      setIsDark(colorScheme === 'dark');
    }
  }, [colorScheme, useSystemTheme]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider value={{
          isDark,
          theme,
          setDarkTheme,
          setLightTheme,
          setSystemTheme,
        }}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>

  );
};
