import React, { FC, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../../theme/ThemeContext';
import LegendIcon from './LegendIcon';
import { deviceWidth } from '../../../../../utils/dimensions';

interface Props {
  data: any[];
  colors: string[];
}

const KeywordsChartLegend: FC<Props> = ({ data, colors }) => {
  const { colors: textColors } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.legendContainer}>
        {data.map((d, index) => (
          <View key={index} style={styles.legendItemContainer}>
            <LegendIcon color={colors[index]} />
            <Text numberOfLines={3} style={[{ color: textColors.mainText }, styles.legendText]}>
              {d.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  legendContainer: {
    alignItems: 'center',
    width: deviceWidth * 0.28,
  },
  legendItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    margin: 10,
    width: '100%',
  },
  legendText: {
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: -0.28,
    lineHeight: 16,
    maxWidth: 80,
  },
});

export default KeywordsChartLegend;
