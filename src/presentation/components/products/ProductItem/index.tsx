import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { IProduct } from '../../../../core/entities';
import { styles } from './styles';
import { ThemeContext } from '../../../theme/ThemeContext';
import { getIconUrl } from '../../../../utils/icon-url';
import { BodySmall, Subheadline } from '../../ui';

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.productDetailsContainer}>
        <View style={styles.productImageContainer}>
          <Image source={{ uri: product.img ?? getIconUrl('', currentTheme, false) }} style={styles.productImageStyle} />
        </View>
        <View style={styles.productDetailsNameContainer}>
          <Subheadline customColor={colors.mainText}>
            {product.name}
          </Subheadline>
        </View>
        <View style={styles.productDetailsButtonContainer}>
          <TouchableOpacity activeOpacity={1.0} style={styles.productDetailsButtonStyle} onPress={() => navigation.navigate('ProductDetailsScreen', { product, newItem: false })}>
            <BodySmall customColor={colors.mainText}>Detalles</BodySmall>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
