import React, { FC } from 'react';
import ProductsHeader from '../../../../components/products/ProductsHeader';
import ProductsMainContainer from '../../../../components/products/ProductsMainContainer';
import { StatusBarComponent } from '../../../../components/ui';
import { useProductsData } from '../../../../hooks/useProductsData';
import ProductsList from '../../../../components/products/ProductsList';

const ProductsScreen: FC = () => {
  const { colors, currentTheme, products } = useProductsData();
  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <ProductsMainContainer>
        <ProductsHeader />
        <ProductsList products={products} />
      </ProductsMainContainer>
    </>
  );
};

export default ProductsScreen;
