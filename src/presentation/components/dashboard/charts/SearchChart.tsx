import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import moment from 'moment';
import 'moment/locale/es';
import { deviceWidth } from '../../../../utils/dimensions';
import { useChartData } from '../../../hooks/useChartData';
import LegendIcon from './legends/LegendIcon';
import NoUsersLegend from './legends/NoUsersLegend';
moment.locale('es');

const CustomLegendIcon = (color: string) => () => <LegendIcon color={color} />;

interface Props {
  selectedMonth: string;
  selectedYear: string;
}

const SearchChart: FC<Props> = ({ selectedMonth, selectedYear }) => {
  const {
    chartData,
    colors,
    spacing,
    formatYValue,
  } = useChartData(selectedMonth, selectedYear);

  if (!selectedMonth && !selectedYear) {
    return <NoUsersLegend text={'Esperando filtros de búsqueda'} />;
  }

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        color={colors.gray}
        color1={colors.darkBlue}
        curved
        dashGap={4}
        dashWidth={2}
        focusedDataPointWidth={10}
        focusedDataPointHeight={6}
        dataPointsHeight={14}
        dataPointsWidth={14}
        delayBeforeUnFocus={15000}
        disableScroll
        customDataPoint={CustomLegendIcon(colors.alert)}
        focusEnabled
        focusedCustomDataPoint={CustomLegendIcon(colors.alert)}
        formatYLabel={formatYValue}
        hideYAxisText={!selectedMonth && !selectedYear}
        initialSpacing={25}
        rotateLabel={false}
        rulesColor={colors.gray}
        rulesThickness={1}
        showTextOnFocus
        showDataPointOnFocus
        showValuesAsDataPointsText
        spacing={spacing}
        textColor={colors.mainText}
        textFontSize={15}
        width={deviceWidth * 0.75}
        xAxisLabelTextStyle={{ color: colors.mainText }}
        xAxisThickness={0}
        yAxisLabelWidth={30}
        yAxisOffset={-1}
        yAxisTextStyle={{ color: colors.mainText }}
        yAxisThickness={0}
        yAxisTextNumberOfLines={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10 },
  dropdownsContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 10,
    maxWidth: 120,
  },
});

export default SearchChart;
