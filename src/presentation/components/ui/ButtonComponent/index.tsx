import React, { FC, useContext } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
}

const ButtonComponent: FC<Props> = ({ children, customStyle, disabled, onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, { backgroundColor: colors.darkBlue }, customStyle]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default ButtonComponent;
