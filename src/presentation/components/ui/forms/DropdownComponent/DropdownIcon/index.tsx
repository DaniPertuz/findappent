import React, { useContext } from 'react';
import { Image } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { appStyles } from '../../../../../theme/app-styles';
import { ThemeContext } from '../../../../../theme/ThemeContext';

const DropDownIcon = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Image
      source={{ uri: getIconUrl('down', currentTheme, true) }}
      style={appStyles.inputIcon}
    />
  );
};

export default DropDownIcon;
