import React, { useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';

const { width, height } = Dimensions.get('window');

export const Background = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.background, {
      backgroundColor: colors.brandMainText,
      borderBottomColor: currentTheme === 'light' ? undefined : colors.brandWhite,
      borderEndColor: currentTheme === 'light' ? undefined : colors.brandWhite,
      borderStartColor: currentTheme === 'light' ? undefined : colors.brandWhite,
    }]}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    borderWidth: 1,
    height: height * 0.296,
    position: 'absolute',
    width,
  },
});
