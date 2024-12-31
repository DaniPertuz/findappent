import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import { deviceHeight, deviceWidth } from '../../../../utils/dimensions';

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
    height: deviceHeight * 0.296,
    position: 'absolute',
    width: deviceWidth,
  },
});
