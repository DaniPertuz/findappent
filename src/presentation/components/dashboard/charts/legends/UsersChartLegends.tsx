import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption2, Footnote } from '../../../ui';
import { usePlaceData } from '../../../../hooks/usePlaceData';
import { ThemeContext } from '../../../../theme/ThemeContext';
import LegendIcon from './LegendIcon';

const UsersChartLegends: FC = () => {
  const { colors } = useContext(ThemeContext);
  const { favorites, ratingAverage, services } = usePlaceData();
  const data = [
    { color: colors.lightBlue, label: 'Historial', value: services.total },
    { color: colors.alert, label: 'Favoritos', value: favorites.total },
    { color: colors.darkBlue, label: 'Calificación', value: ratingAverage.toFixed(2) },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.legendItemContainer}>
          <LegendIcon color={item.color} />
          <View style={styles.legendTextContainer}>
            <Caption2 customColor={colors.mainText}>{item.label}</Caption2>
            <Footnote customColor={colors.gray}>{item.value}</Footnote>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  legendItemContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 15,
  },
  legendItemColor: {
    borderRadius: 25,
    borderWidth: 2,
    height: 15,
    width: 15,
  },
  legendTextContainer: {
    gap: 5,
  },
});

export default UsersChartLegends;
