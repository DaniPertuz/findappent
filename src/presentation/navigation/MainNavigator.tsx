import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IProduct, IPlace } from '../../core/entities';
import { LoadingScreen } from '../screens';
import { UpdateProfileScreen } from '../screens/profile';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParams = {
  BottomTabNavigator: undefined;
  LoadingScreen: undefined,
  LoginScreen: undefined,
  MainScreen: undefined,
  NewPasswordScreen: undefined,
  ProductsScreen: undefined,
  ProductDetails: { product: IProduct, newItem: boolean; },
  Profile: undefined,
  RegisterScreen: undefined,
  UpdateProfileScreen: { place: IPlace; };
};

const Stack = createStackNavigator<RootStackParams>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'none', headerShown: false }}>
      <Stack.Screen name={'BottomTabNavigator'} component={BottomTabNavigator} />
      <Stack.Screen name={'UpdateProfileScreen'} component={UpdateProfileScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name={'LoadingScreen'} component={LoadingScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
