import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { useColors } from '../../../theme/colors';

interface Props {
  children: React.ReactNode;
}

export const BodySmall: FC<Props> = ({ children }) => {
  const { mainText } = useColors();
  return (
    <Text style={{ ...styles.bodySmall, color: mainText }}>{children}</Text>
  );
};
