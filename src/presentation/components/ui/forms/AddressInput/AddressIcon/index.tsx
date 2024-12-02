import React from 'react';
import { Image } from 'react-native';
import { useStyles } from '../../styles';

const AddressIcon = () => {
  const { inputIcon } = useStyles();
  return (
    <Image source={require('../../../../../../assets/icons/mall.png')} style={inputIcon} />
  );
};

export default AddressIcon;
