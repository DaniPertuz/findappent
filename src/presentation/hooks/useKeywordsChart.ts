import { useContext } from 'react';
import { getRandomColor } from '../../utils/randomColor';
import { usePlaceData } from './usePlaceData';
import { ThemeContext } from '../theme/ThemeContext';

export const useKeywordsChart = () => {
  const { colors } = useContext(ThemeContext);
  const { services } = usePlaceData();
  const searchCounts: Record<string, number> = {};

  services.services.forEach(item => {
    if (item.search) {
      searchCounts[item.search] = (searchCounts[item.search] || 0) + 1;
    }
  });

  const unique = Object.keys(searchCounts).map(search => ({
    search,
    total: searchCounts[search],
  }));

  const pieDataRaw = unique.map((item) => ({
    value: item.total,
    name: item.search,
    // name: item.search.length > 20 ? item.search.slice(0, 20) + '...' : item.search,
  }));

  const total = pieDataRaw.reduce((sum, item) => sum + item.value, 0);

  const pieData = pieDataRaw.map((item, index) => ({
    ...item,
    text: ((item.value / total) * 100).toFixed(1) + '%',
    color: getRandomColor(index),
  }));

  const data = pieData.sort((a, b) => b.value - a.value).map((item) => ({
    name: item.name,
    amount: item.value,
    color: item.color,
    legendFontColor: colors.mainText,
    legendFontSize: 12,
  }));
  return {
    colors,
    pieData,
    data,
  };
};
