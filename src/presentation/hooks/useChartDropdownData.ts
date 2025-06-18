import { useContext, useEffect, useState } from 'react';
import { usePlaceStore } from '../../store';
import { useSearchStore } from '../../store/searchStore';
import { ThemeContext } from '../theme/ThemeContext';

export const useChartDropdownData = () => {
  const { colors } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [monthYearItems, setMonthYearItems] = useState<{ label: string; value: string; }[]>([]);
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

        const monthSet = new Set<string>();
        const yearSet = new Set<string>();
        const monthYearSet = new Set<string>();

        const months: { label: string; value: string; }[] = [];
        const years: { label: string; value: string; }[] = [];
        const monthYearList: { label: string; value: string; }[] = [];

        resp.forEach(({ year, months: yearMonths }) => {
          yearSet.add(String(year));

          yearMonths.forEach(({ month, name }) => {
            const paddedMonth = String(month).padStart(2, '0');

            if (!monthSet.has(paddedMonth)) {
              monthSet.add(paddedMonth);
              months.push({ label: name, value: paddedMonth });
            }

            const combined = `${paddedMonth}-${year}`;
            if (!monthYearSet.has(combined)) {
              monthYearSet.add(combined);
              monthYearList.push({
                label: `${name} ${year}`,
                value: combined,
              });
            }
          });
        });

        const sortedMonthYear = monthYearList.sort((a, b) => (a.value < b.value ? 1 : -1));

        yearSet.forEach((year) => {
          years.push({ label: year, value: year });
        });

        setMonthsAvailable(months);
        setYearsAvailable(years);
        setMonthYearItems(sortedMonthYear);

        if (sortedMonthYear.length > 0) {
          const [defaultMonth, defaultYear] = sortedMonthYear[0].value.split('-');
          setSelectedMonth(defaultMonth);
          setSelectedYear(defaultYear);
        }
      } catch (error) {
        setMonthYearItems([]);
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
    monthYearItems,
    yearsAvailable,
    selectedMonth,
    selectedYear,
    setSelectedMonth,
    setSelectedYear,
  };
};
