import React, { FC, useContext } from 'react';
import { Image } from 'react-native';
import { ThemeContext } from '../../../../../theme/ThemeContext';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { useStyles } from '../../styles';

const PasswordIcon: FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { inputIcon } = useStyles();
  return (
    <Image style={inputIcon} source={{ uri: getIconUrl('lock', currentTheme, true) }} />
  );
};

export default PasswordIcon;
