import React, { FC, useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';

const { width, height } = Dimensions.get('window');

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
    height: height * 0.85,
    marginVertical: 45,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: width * 0.9,
  },
});

export default AuthFormContainer;
