import React, { FC, useContext } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { useColors } from '../../../theme/colors';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonComponent: FC<Props> = ({ children, customStyle, disabled, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { darkBlue } = useColors(currentTheme === 'dark');
  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, { backgroundColor: darkBlue }, customStyle]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
