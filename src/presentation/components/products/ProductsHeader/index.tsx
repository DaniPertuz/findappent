import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePlaceStore } from '../../../../store';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { BackButton, ButtonComponent, Caption1 } from '../../ui';
import ProductsHeaderTitle from '../ProductsHeaderTitle';
import { ThemeContext } from '../../../theme/ThemeContext';

const ProductsHeader = () => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const place = usePlaceStore(state => state.place);

  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <ProductsHeaderTitle />
      <ButtonComponent
        onPress={() => navigation.navigate('ProductDetailsScreen', {
          product: {
            name: '',
            description: '',
            price: 0,
            img: '',
            categories: [],
            place: place?._id!,
            currency: 'COP', // Assuming currency is always COP for now
          },
          newItem: true,
        })}
      >
        <Caption1 customColor={colors.mainText}>Agregar</Caption1>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
});

export default ProductsHeader;
