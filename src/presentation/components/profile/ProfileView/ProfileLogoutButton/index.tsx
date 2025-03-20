import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Body } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileLogoutButton: FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable style={styles.container} onPress={() => console.log('Logout')}>
      <Body customColor={colors.error}>Cerrar sesión</Body>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
});

export default ProfileLogoutButton;
