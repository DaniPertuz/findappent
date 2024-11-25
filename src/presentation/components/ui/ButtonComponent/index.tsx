import React, { FC } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { useColors } from '../../../theme/colors';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const ButtonComponent: FC<Props> = ({ children, customStyle, onPress }) => {
  const { darkBlue } = useColors();
  return (
    <Pressable
      style={[styles.button, { backgroundColor: darkBlue }, customStyle]}
      onPress={onPress}
      >
      {children}
    </Pressable>
  );
};
