import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { useColors } from './colors';
import { ThemeColors } from './ThemeColors';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setLightTheme: () => void;
  setDarkTheme: () => void;
  setSystemTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const [useSystemTheme, setUseSystemTheme] = useState(true);
  const baseColors = useColors(isDark);

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
    <ThemeContext.Provider value={{
      currentTheme: isDark ? 'dark' : 'light',
      colors: baseColors,
      setDarkTheme,
      setLightTheme,
      setSystemTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
