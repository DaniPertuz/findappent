import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { useChartDropdownData } from '../../../hooks/useChartDropdownData';
import { Subheadline } from '../../ui';
import { KeywordsChart, SearchChart, UsersChart } from '../charts';
import DropdownCharts from '../charts/components/DropdownCharts';
import { styles } from './styles';

const DashboardStatistics: FC = () => {
  const {
    colors,
    isLoading,
    monthYearItems,
    selectedMonth,
    selectedYear,
    setSelectedMonth,
    setSelectedYear,
  } = useChartDropdownData();

  return (
    <View style={styles.container}>
      <Subheadline customColor={colors.mainText}>Estadísticas</Subheadline>
      <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <Subheadline customColor={colors.mainText}>Búsquedas mensuales</Subheadline>
          <DropdownCharts
            colors={colors}
            isLoading={isLoading}
            monthYearItems={monthYearItems}
            setSelectedMonth={setSelectedMonth}
            setSelectedYear={setSelectedYear}
          />
          <SearchChart selectedMonth={selectedMonth} selectedYear={selectedYear} />
        </View>
        <View style={styles.chartContainer}>
          <Subheadline customColor={colors.mainText}>Usuarios frecuentes</Subheadline>
          <UsersChart />
        </View>
        <View style={styles.chartContainer}>
          <Subheadline customColor={colors.mainText}>Palabras clave</Subheadline>
          <KeywordsChart selectedMonth={selectedMonth} selectedYear={selectedYear} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardStatistics;
