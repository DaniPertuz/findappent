import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  children: React.ReactNode;
}

export const MainView: FC<Props> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
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
