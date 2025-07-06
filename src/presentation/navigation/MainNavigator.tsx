import React, { useEffect } from 'react';
import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { IProduct, IPlace } from '../../core/entities';
import { LoadingScreen, LoginScreen, RegisterScreen, ResetPasswordScreen } from '../screens';
import { ProductDetailsScreen, ProductsScreen, UpdateProfileScreen } from '../screens/profile';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParams = {
  BottomTabNavigator: undefined;
  LoadingScreen: undefined,
  LoginScreen: undefined,
  MainScreen: undefined,
  NewPasswordScreen: undefined,
  ProductsScreen: undefined,
  ProductDetailsScreen: { product: IProduct, newItem?: boolean; },
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
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'RegisterScreen'} component={RegisterScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'NewPasswordScreen'} component={ResetPasswordScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'BottomTabNavigator'} component={BottomTabNavigator} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'ProductsScreen'} component={ProductsScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'ProductDetailsScreen'} component={ProductDetailsScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'UpdateProfileScreen'} component={UpdateProfileScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name={'LoadingScreen'} component={LoadingScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
