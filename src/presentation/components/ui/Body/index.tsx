import React, { FC, useContext } from 'react';
import { Text } from 'react-native';
import { TextProps } from '../../../../interfaces/text-props.interface';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const Body: FC<TextProps> = ({ children, customColor }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Text style={{ ...styles.body, color: customColor ?? colors.brandMainText }}>{children}</Text>
  );
};

export default Body;
