import React, { FC, useContext } from 'react';
import { Image } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';
import { useStyles } from '../../styles';

interface Props {
  visible: boolean;
}

const PasswordVisibleIcon: FC<Props> = ({ visible }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { inputIcon } = useStyles();
  return (
    <Image
      style={inputIcon}
      source={{ uri: getIconUrl(visible ? 'eye' : 'eyeclosed', currentTheme, true) }}
    />
  );
};

export default PasswordVisibleIcon;
