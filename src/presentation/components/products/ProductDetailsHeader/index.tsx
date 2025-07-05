import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IProduct } from '../../../../core/entities';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { BackButton, Caption1 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const ProductDetailsHeader: FC<{ product: IProduct; }> = ({ product }) => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.headerContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.productNameContainer}>
        <Caption1 customColor={colors.mainText}>{product.name}</Caption1>
      </View>
    </View>
  );
};

export default ProductDetailsHeader;
