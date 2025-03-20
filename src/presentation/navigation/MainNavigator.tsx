import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IPlace, IProduct } from '../../interfaces/app.interface';
import { UpdateProfileScreen } from '../screens/profile';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParams = {
  BottomTabNavigator: undefined;
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
    </Stack.Navigator>
  );
};

export default MainNavigator;
