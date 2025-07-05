import React, { FC, useContext } from 'react';
import { Pressable } from 'react-native';
import { Body } from '../../../ui';
import { useAuthStore } from '../../../../../store';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileLogoutButton: FC = () => {
  const { colors } = useContext(ThemeContext);
  const logOut = useAuthStore(state => state.logout);

  return (
    <Pressable onPress={logOut}>
      <Body customColor={colors.error}>Cerrar sesión</Body>
    </Pressable>
  );
};

export default ProfileLogoutButton;
