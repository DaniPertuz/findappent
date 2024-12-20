import React, { FC, useContext } from 'react';
import { Text } from 'react-native';
import { TextProps } from '../../../../interfaces/text-props.interface';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

export const BodySmall: FC<TextProps> = ({ children, customColor }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Text style={{ ...styles.bodySmall, color: customColor ?? colors.brandMainText }}>{children}</Text>
  );
};
