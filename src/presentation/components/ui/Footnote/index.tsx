import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { useColors } from '../../../theme/colors';

interface Props {
  children: React.ReactNode;
}

export const Footnote: FC<Props> = ({ children }) => {
  const { mainText } = useColors();
  return (
    <Text style={{ ...styles.footnote, color: mainText }}>{children}</Text>
  );
};
