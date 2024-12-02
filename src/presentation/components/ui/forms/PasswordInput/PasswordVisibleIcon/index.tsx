import React, { FC } from 'react';
import { Image } from 'react-native';
import { useStyles } from '../../styles';

interface Props {
  visible: boolean;
}

const PasswordVisibleIcon: FC<Props> = ({ visible }) => {
  const { inputIcon } = useStyles();
  return (
    <Image
      style={inputIcon}
      source={
        visible ?
          require('../../../../../../assets/icons/eye-closed.png')
          :
          require('../../../../../../assets/icons/eye.png')
      }
    />
  );
};

export default PasswordVisibleIcon;
