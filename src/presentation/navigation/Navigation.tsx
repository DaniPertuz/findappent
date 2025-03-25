import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthStore } from '../../store/authStore';
import { LoadingScreen, LoginScreen, RegisterScreen, ResetPasswordScreen } from '../screens';
import { MainNavigator } from './';

const Stack = createStackNavigator();

const Navigation = () => {

  const { status, user } = useAuthStore();

  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {(!user || status !== 'authenticated')
        ?
        <>
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} />
          <Stack.Screen name={'NewPasswordScreen'} component={ResetPasswordScreen} />
        </>
        :
        <Stack.Screen name={'MainScreen'} component={MainNavigator} />
      }
    </Stack.Navigator>
  );
};

export default Navigation;
