import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Body } from '../../../ui';
import { useAuthStore } from '../../../../../store';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileLogoutButton: FC = () => {
  const { colors } = useContext(ThemeContext);
  const logOut = useAuthStore(state => state.logout);

  return (
    <View style={styles.container}>
      <Pressable onPress={logOut}>
        <Body customColor={colors.error}>Cerrar sesión</Body>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
});

export default ProfileLogoutButton;
