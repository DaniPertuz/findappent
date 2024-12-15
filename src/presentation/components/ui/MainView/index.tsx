import React, { FC, PropsWithChildren, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';

export const MainView: FC<PropsWithChildren> = ({ children }) => {
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
    flex: 1,
  },
});
