import { useContext, useEffect, useState } from 'react';
import { usePlaceStore } from '../../store';
import { useSearchStore } from '../../store/searchStore';
import { ThemeContext } from '../theme/ThemeContext';

export const useChartDropdownData = () => {
  const { colors } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [monthsAvailable, setMonthsAvailable] = useState<{ label: string; value: string; }[]>([]);
  const [yearsAvailable, setYearsAvailable] = useState<{ label: string; value: string; }[]>([]);
  const place = usePlaceStore(state => state.place);
  const getSearchLogsAvailable = useSearchStore(state => state.getSearchLogsAvailable);
  const placeId = place?._id;

  useEffect(() => {
    const fetchLogsAvailable = async () => {
      if (!placeId) { return; }
      try {
        const resp = await getSearchLogsAvailable(placeId);

        const monthsSet = new Set<string>();
        const yearsSet = new Set<string>();

        const months: { label: string; value: string; }[] = [];
        const years: { label: string; value: string; }[] = [];

        resp.forEach(({ year, months: yearMonths }) => {
          yearsSet.add(String(year));
          yearMonths.forEach(({ month, name }) => {
            const key = `${month}`;
            if (!monthsSet.has(key)) {
              monthsSet.add(key);
              months.push({
                label: name,
                value: String(month),
              });
            }
          });
        });

        yearsSet.forEach((year) => {
          years.push({ label: year, value: year });
        });

        setMonthsAvailable(months);
        setYearsAvailable(years);
      } catch (error) {
        setMonthsAvailable([]);
        setYearsAvailable([]);
        console.error('Error fetching search logs available:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLogsAvailable();
  }, [placeId, getSearchLogsAvailable]);

  return {
    colors,
    isLoading,
    monthsAvailable,
    yearsAvailable,
    selectedMonth,
    selectedYear,
    setSelectedMonth,
    setSelectedYear,
  };
};
