import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, ButtonComponent } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  text: string;
  action?: 'login' | 'register' | 'reset';
}

const AuthButton: FC<Props> = ({ text }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.loginButtonContainer}>
      <ButtonComponent>
        <Body customColor={colors.brandWhite}>{text}</Body>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
});

export default AuthButton;
