import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './src/presentation/theme/ThemeContext';
import MainNavigator from './src/presentation/navigation/MainNavigator';
import { AuthProvider } from './src/presentation/providers/AuthProvider';

const FindAppEnt = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeContextProvider>
          <MainNavigator />
        </ThemeContextProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default FindAppEnt;
