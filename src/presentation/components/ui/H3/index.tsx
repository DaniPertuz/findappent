import React, { FC, useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';
import { TextProps } from '../../../../interfaces/text-props.interface';

const H3: FC<TextProps> = ({ children, customColor }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Text style={{ ...styles.h3, color: customColor ?? colors.brandMainText }}>{children}</Text>
  );
};

export default H3;
