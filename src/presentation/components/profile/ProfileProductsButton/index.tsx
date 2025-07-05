import React, { FC, useContext } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { Body } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const ProfileProductsButton: FC = () => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.navigate('ProductsScreen')}>
      <Body customColor={colors.alert}>Productos</Body>
    </Pressable>
  );
};

export default ProfileProductsButton;
