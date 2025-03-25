import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Body } from '../../../ui';
import { useAuthStore } from '../../../../../store/authStore';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileLogoutButton: FC = () => {
  const { colors } = useContext(ThemeContext);
  const logOut = useAuthStore(state => state.logout);

  return (
    <Pressable style={styles.container} onPress={logOut}>
      <Body customColor={colors.error}>Cerrar sesión</Body>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
});

export default ProfileLogoutButton;
