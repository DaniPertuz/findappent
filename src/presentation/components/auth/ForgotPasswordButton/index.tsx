import React, { FC, useContext } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Caption2 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const ForgotPasswordButton: FC<{ onPress: () => void; }> = ({ onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.forgotPasswordContainer}>
      <Pressable onPress={onPress}>
        <Caption2 customColor={colors.darkBlue}>¿Olvidaste tu contraseña?</Caption2>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
  },
});

export default ForgotPasswordButton;
