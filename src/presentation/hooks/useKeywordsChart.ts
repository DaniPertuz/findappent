import { useContext, useEffect, useState } from 'react';
import { ChartDataItem, PieDataItem } from '../../interfaces/app.interface';
import { useSearchStore } from '../../store/searchStore';
import { getRandomColor } from '../../utils/randomColor';
import { usePlaceData } from './usePlaceData';
import { ThemeContext } from '../theme/ThemeContext';

export const useKeywordsChart = (selectedMonth: string, selectedYear: string) => {
  const { colors } = useContext(ThemeContext);
  const [pieData, setPieData] = useState<PieDataItem[]>([]);
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const { place } = usePlaceData();
  const getSearchLogs = useSearchStore(state => state.getSearchLogs);

  useEffect(() => {
    const fetchLogs = async () => {
      if (!selectedMonth || !selectedYear || !place?._id) { return; }

      try {
        const data = await getSearchLogs(+selectedYear, +selectedMonth, place._id);

        const pieDataRaw = data.keywords.map((item) => ({
          value: item.count,
          name: item.keyword,
          // name: item.search.length > 20 ? item.search.slice(0, 20) + '...' : item.search,
        }));

        const total = data.total;

        const pieDataProcessed = pieDataRaw.map((item, index) => ({
          ...item,
          text: ((item.value / total) * 100).toFixed(1) + '%',
          color: getRandomColor(index),
        }));

        const chartDataProcessed = pieDataProcessed
          .sort((a, b) => b.value - a.value)
          .map((item) => ({
            name: item.name,
            amount: item.value,
            color: item.color,
            legendFontColor: colors.mainText,
            legendFontSize: 12,
          }));

        setChartData(chartDataProcessed);
        setPieData(pieDataProcessed);
      } catch (error) {
        console.error('Error fetching monthly logs:', error);
      }
    };

    fetchLogs();
  }, [selectedMonth, selectedYear, place, getSearchLogs, colors.mainText]);

  return {
    colors,
    pieData,
    data: chartData,
  };
};
