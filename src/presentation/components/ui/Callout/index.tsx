import React, { FC, useContext } from 'react';
import { Text } from 'react-native';
import { useColors } from '../../../theme/colors';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  customColor?: string;
}

export const Callout: FC<Props> = ({ children, customColor }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText } = useColors(currentTheme === 'dark');
  return (
    <Text style={{ ...styles.bodySmall, color: customColor ?? brandMainText }}>{children}</Text>
  );
};
