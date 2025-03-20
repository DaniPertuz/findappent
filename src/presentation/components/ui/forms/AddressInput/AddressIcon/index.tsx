import React, { FC, useContext } from 'react';
import { Image } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';
import { useStyles } from '../../styles';

const AddressIcon: FC = () => {
  const { inputIcon } = useStyles();
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Image source={{ uri: getIconUrl('mall', currentTheme, true) }} style={inputIcon} />
  );
};

export default AddressIcon;
