import React, { FC } from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import { deviceHeight, deviceWidth } from '../../../../utils/dimensions';
import { useUsersChart } from '../../../hooks/useUsersChart';
import UsersChartLegends from './legends/UsersChartLegends';
import NoUsersLegend from './legends/NoUsersLegend';

const UsersChart: FC = () => {
  const { chartConfig, data, total } = useUsersChart();

  if (total === 0) {
    return <NoUsersLegend text={'Esperando usuarios visitantes'} />;
  }

  return (
    <>
      <ProgressChart
        data={data}
        width={deviceWidth * 0.9}
        height={deviceHeight / 3.5}
        strokeWidth={8}
        radius={32}
        chartConfig={chartConfig}
        hideLegend
      />
      <UsersChartLegends />
    </>
  );
};

export default UsersChart;
