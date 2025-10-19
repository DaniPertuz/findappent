import React, { useContext } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { IProduct } from '../../../../core/entities';
import { getIconUrl } from '../../../../utils/icon-url';
import { BodySmall, Subheadline } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { name, imgs } = product;
  const imageUri = imgs ? imgs.find(img => img.main === true)?.img : getIconUrl('product', currentTheme, false);

  const handlePress = () => navigation.navigate('ProductDetailsScreen', { product });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.productDetailsContainer}>
        <View style={styles.productImageContainer}>
          <Image source={{ uri: imageUri }} style={styles.productImageStyle} />
        </View>
        <View style={styles.productDetailsNameContainer}>
          <Subheadline customColor={colors.mainText}>
            {name}
          </Subheadline>
        </View>
        <View style={styles.productDetailsButtonContainer}>
          <Pressable style={styles.productDetailsButtonStyle} onPress={handlePress}>
            <BodySmall customColor={colors.mainText}>Detalles</BodySmall>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
