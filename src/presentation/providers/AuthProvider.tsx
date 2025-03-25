import React, { PropsWithChildren, useEffect } from 'react';
import { StorageAdapter } from '../../adapters/storage-adapter';
import { IUser } from '../../core/entities';
import { useAuthStore } from '../../store/authStore';
import { navigate } from '../navigation/navigationRef';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { status, checkUser } = useAuthStore();

  const checkStoredUser = async () => {
    const storedUser = await StorageAdapter.getItem('user');
    return storedUser;
  };

  const handleUserCheck = async () => {
    const storedUser = await checkStoredUser();
    const parsedUser = JSON.parse(storedUser!) as IUser;
    checkUser(parsedUser);

    if (status === 'authenticated' && storedUser) {
      navigate('BottomTabNavigator');
      return;
    }

    if (status === 'unauthenticated' || !storedUser) {
      navigate('LoginScreen');
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
