import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { usePlaceData } from './usePlaceData';
import { hexToRgba } from '../../utils/hexToRgba';

export const useUsersChart = () => {
  const { colors } = useContext(ThemeContext);
  const { favorites, ratingAverage, services } = usePlaceData();
  const total = favorites.total + services.total;
  const totalFavorites = total > 0 ? favorites.total / total : 0;
  const totalServices = total > 0 ? services.total / total : 0;
  const totalRate = (ratingAverage / 5);
  const data = {
    data: [totalServices, totalRate, totalFavorites],
    colors: [colors.lightBlue, colors.darkBlue, colors.alert],
  };
  const chartConfig = {
    backgroundGradientFrom: colors.background,
    backgroundGradientTo: colors.background,
    color: (opacity: number, index?: number) => {
      if (typeof index === 'number') {
        return hexToRgba(data.colors[index], opacity);
      }
      return hexToRgba(colors.black, opacity);
    },
  };

  return {
    data,
    chartConfig,
    total,
  };
};
