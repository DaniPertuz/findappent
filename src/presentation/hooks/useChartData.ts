import { useContext, useEffect, useState } from 'react';
import { usePlaceData } from './usePlaceData';
import { useSearchStore } from '../../store/searchStore';
import { deviceWidth } from '../../utils/dimensions';
import { ThemeContext } from '../theme/ThemeContext';

export const useChartData = (selectedMonth: string, selectedYear: string) => {
  const { colors } = useContext(ThemeContext);
  const [chartData, setChartData] = useState<{ value: number; label: string; }[]>([]);
  const { place } = usePlaceData();
  const getSearchLogsMonthly = useSearchStore(state => state.getSearchLogsMonthly);
  const spacing =
    chartData.length > 1
      ? (deviceWidth * 0.75 - 50) / (chartData.length - 1)
      : 0;

  const formatYValue = (value: string) => value === '-1' ? '' : String(value);

  useEffect(() => {
    const fetchMonthlyLogs = async () => {
      if (!selectedMonth || !selectedYear || !place?._id) { return; }

      try {
        const data = await getSearchLogsMonthly(selectedYear, selectedMonth, place._id);

        const formatted = data.map((item) => ({
          value: item.count,
          label: `Sem ${item.week}`,
          hideDataPoint: item.count === 0,
        }));

        setChartData(formatted.length ? formatted : [{ value: 0, label: 'Sin datos' }]);
      } catch (error) {
        console.error('Error fetching monthly logs:', error);
        setChartData([{ value: 0, label: 'Sin datos' }]);
      }
    };

    fetchMonthlyLogs();
  }, [selectedMonth, selectedYear, place, getSearchLogsMonthly]);

  return {
    chartData,
    colors,
    spacing,
    formatYValue,
  };
};
