import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';
import { StorageAdapter } from '../../adapters/storage-adapter';
import { IUser } from '../../core/entities';
import { useAuthStore } from '../../store';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { status, checkUser } = useAuthStore();

  const checkStoredUser = async () => {
    const storedUser = await StorageAdapter.getItem('user');
    return storedUser;
  };

  const handleUserCheck = async () => {
    if (status === 'checking') {
      navigation.reset({ index: 0, routes: [{ name: 'LoadingScreen' }] });
    }

    const storedUser = await checkStoredUser();
    const parsedUser = JSON.parse(storedUser!) as IUser;
    checkUser(parsedUser);

    if (status === 'authenticated' && storedUser) {
      navigation.reset({ index: 0, routes: [{ name: 'BottomTabNavigator' }] });
      return;
    }

    if (status === 'unauthenticated' && !storedUser) {
      navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] });
      return;
    }
  };

  useEffect(() => {
    handleUserCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return <>{children}</>;
};
