import React, { FC, useContext } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { useColors } from '../../../theme/colors';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  children: React.ReactNode;
  customColor?: string;
}

export const Footnote: FC<Props> = ({ children, customColor }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText } = useColors(currentTheme === 'dark');
  return (
    <Text style={{ ...styles.footnote, color: customColor ?? brandMainText }}>{children}</Text>
  );
};
