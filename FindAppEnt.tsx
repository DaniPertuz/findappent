import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/presentation/theme/ThemeContext';
import Navigation from './src/presentation/navigation/Navigation';
import { AuthProvider } from './src/presentation/providers/AuthProvider';
import { navigationRef } from './src/presentation/navigation/navigationRef';

const FindAppEnt = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ThemeContextProvider>
          <Navigation />
        </ThemeContextProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default FindAppEnt;
