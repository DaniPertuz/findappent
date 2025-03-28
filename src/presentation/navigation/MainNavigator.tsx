import React from 'react';
import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack';
import { IProduct, IPlace } from '../../core/entities';
import { LoadingScreen, LoginScreen, RegisterScreen, ResetPasswordScreen } from '../screens';
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

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'RegisterScreen'} component={RegisterScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'NewPasswordScreen'} component={ResetPasswordScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'BottomTabNavigator'} component={BottomTabNavigator} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'UpdateProfileScreen'} component={UpdateProfileScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'LoadingScreen'} component={LoadingScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
