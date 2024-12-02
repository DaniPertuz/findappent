import React from 'react';
import { Image } from 'react-native';
import { useStyles } from '../../styles';

const PassowrdIcon = () => {
  const { inputIcon } = useStyles();
  return (
    <Image style={inputIcon} source={require('../../../../../../assets/icons/lock.png')} />
  );
};

export default PassowrdIcon;
