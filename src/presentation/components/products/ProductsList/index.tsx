import React, { useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { IProduct } from '../../../../core/entities';
import { deviceHeight } from '../../../../utils/dimensions';
import ProductItem from '../ProductItem';

interface Props {
  products: IProduct[];
}

const ProductsList = ({ products }: Props) => {
  const scrollViewRef = useRef(null);
  const contentHeightRef = useRef(0);

  const handleContentSizeChange = (contentHeight: number) => {
    contentHeightRef.current = contentHeight;
  };

  return (
    <ScrollView scrollEnabled={(contentHeightRef.current === deviceHeight - 20)} ref={scrollViewRef} onContentSizeChange={handleContentSizeChange} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 20,
    gap: 15,
  },
});

export default ProductsList;
