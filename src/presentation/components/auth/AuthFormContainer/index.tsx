import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { deviceHeight, deviceWidth } from '../../../../utils/dimensions';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  children: React.ReactNode;
}

const AuthFormContainer: FC<Props> = ({ children }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const borders = {
    backgroundColor: colors.white,
    borderColor: currentTheme === 'light' ? undefined : colors.brandWhite,
    borderWidth: currentTheme === 'light' ? 0 : 1,
  };

  return (
    <View style={[styles.loginFormContainer, borders]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    borderRadius: 16,
    height: deviceHeight * 0.85,
    marginVertical: 45,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: deviceWidth * 0.9,
  },
});

export default AuthFormContainer;
