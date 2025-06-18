import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { useKeywordsChart } from '../../../hooks/useKeywordsChart';
import KeywordsChartLegend from './legends/KeywordsChartLegend';
import NoUsersLegend from './legends/NoUsersLegend';

interface Props {
  selectedMonth: string;
  selectedYear: string;
}

const KeywordsChart: FC<Props> = ({ selectedMonth, selectedYear }) => {
  const { colors, pieData, data } = useKeywordsChart(selectedMonth, selectedYear);

  if (!selectedMonth && !selectedYear) {
    return <NoUsersLegend text={'Esperando filtros de búsqueda'} />;
  }

  if (pieData.length === 0) {
    return <NoUsersLegend text={'Esperando búsquedas'} />;
  }

  return (
    <View style={styles.container}>
      <PieChart
        showText
        textColor={colors.brandWhite}
        radius={100}
        textSize={14}
        data={pieData}
        backgroundColor={colors.background}
      />
      <KeywordsChartLegend data={data} colors={pieData.map(item => item.color)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 20, padding: 20, flexDirection: 'row' },
});

export default KeywordsChart;
