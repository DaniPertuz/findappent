import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ThemeColors } from '../../../../theme/ThemeColors';
import DropdownChart from './DropdownChart';

interface Props {
  colors: ThemeColors;
  isLoading: boolean;
  monthYearItems: { label: string, value: string; }[];
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownCharts: FC<Props> = ({ colors, isLoading, monthYearItems, setSelectedMonth, setSelectedYear }) => {
  return (
    <>
      {isLoading && !monthYearItems ? (
        <ActivityIndicator size={25} color={colors.mainText} />
      ) : (
        <View style={styles.dropdownContainer}>
          <DropdownChart
            items={monthYearItems}
            placeholder={'Periodo'}
            onChange={(value) => {
              const [month, year] = value.split('-');
              setSelectedMonth(month);
              setSelectedYear(year);
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DropdownCharts;
