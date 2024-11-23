import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { icons } from '../../utils/icons';

export const useIcons = (name: string, height: number, width: number, fill: string) => {
  const iconUri = icons[name];

  if (!iconUri) {
    return null;
  }

  return <SvgUri width={width} height={height} source={iconUri} fill={fill} />;
};
