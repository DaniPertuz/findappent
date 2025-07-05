import { useContext, useEffect } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { useProductStore } from '../../store/productStore';
import { usePlaceStore } from '../../store';

export const useProductsData = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const { place } = usePlaceStore();
  const { getProductsByPlace, products } = useProductStore();

  useEffect(() => {
    const fetchProductsData = async () => {
      await getProductsByPlace(place?._id!);
    };
    fetchProductsData();
  }, [getProductsByPlace, place?._id]);

  return {
    colors,
    currentTheme,
    products,
  };
};
