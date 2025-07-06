import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { RootStackParams } from '../../../../navigation/MainNavigator';
import ProductDetailsHeader from '../../../../components/products/ProductDetailsHeader';
import ProductItemForm from '../../../../components/products/ProductItemForm';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';
import { StatusBarComponent } from '../../../../components/ui';

interface Props extends StackScreenProps<RootStackParams, 'ProductDetailsScreen'> { }

const ProductDetailsScreen: FC<Props> = ({ route }) => {
  const { colors } = useContext(ThemeContext);
  const { product, newItem } = route.params;
  return (
    <>
      <StatusBarComponent color={colors.brandMainText} theme={'light-content'} />
      <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
        <ProductDetailsHeader product={product} />
        <ProductItemForm product={product} newItem={newItem} />
      </View>
    </>
  );
};

export default ProductDetailsScreen;
