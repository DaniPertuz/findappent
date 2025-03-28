import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';
import { StorageAdapter } from '../../adapters/storage-adapter';
import { IUser } from '../../core/entities';
import { useAuthStore } from '../../store/authStore';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const status = useAuthStore(state => state.status);
  const checkUser = useAuthStore(state => state.checkUser);

  const checkStoredUser = async () => {
    const storedUser = await StorageAdapter.getItem('user');
    return storedUser;
  };

  const handleUserCheck = async () => {
    const storedUser = await checkStoredUser();
    const parsedUser = JSON.parse(storedUser!) as IUser;
    checkUser(parsedUser);

    if (status === 'checking') {
      navigation.push('LoadingScreen');
    }

    if (status === 'authenticated' && storedUser) {
      navigation.push('BottomTabNavigator');
      return;
    }

    if (status === 'unauthenticated' && !storedUser) {
      navigation.push('LoginScreen');
      return;
    }
  };

  useEffect(() => {
    handleUserCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>{children}</>
  );
};
