import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { BackButton } from '../../ui';
import ProductsHeaderTitle from '../ProductsHeaderTitle';

const ProductsHeader = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <ProductsHeaderTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
});

export default ProductsHeader;
