import React, { FC, PropsWithChildren, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../../../theme/ThemeContext';

const ModalProfilePictureContainer: FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    gap: 10,
    padding: 10,
    width: '100%',
  },
});

export default ModalProfilePictureContainer;
