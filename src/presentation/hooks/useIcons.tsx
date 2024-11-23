import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { icons } from '../../utils/icons';
import { useColors } from '../theme/colors';

export const useIcons = (name: string, height: number, width: number) => {
  const iconUri = icons[name];
  const { mainText } = useColors();

  if (!iconUri) {
    return null;
  }

  return <SvgUri width={width} height={height} source={iconUri} fill={mainText} />;
};
