import React, { FC, useContext } from 'react';
import { Image } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { appStyles } from '../../../../../theme/app-styles';
import { ThemeContext } from '../../../../../theme/ThemeContext';

const DropDownUpIcon: FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Image
      source={{ uri: getIconUrl('down', currentTheme, true) }}
      style={[appStyles.inputIcon, { transform: [{ rotate: '180deg' }]}]}
    />
  );
};

export default DropDownUpIcon;
