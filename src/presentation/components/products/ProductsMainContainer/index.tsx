import React, { FC, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../../theme/ThemeContext';
import { ScrollView, StyleSheet } from 'react-native';

const ProductsMainContainer: FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ScrollView contentContainerStyle={[{ backgroundColor: colors.background }, styles.container]} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});

export default ProductsMainContainer;
