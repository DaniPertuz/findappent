import React, { FC, useContext } from 'react';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { StyleSheet, View } from 'react-native';

const LegendIcon: FC<{ color: string; }> = ({ color }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.white, borderColor: color }, styles.legendItemColor]} />
  );
};

const styles = StyleSheet.create({
  legendItemColor: {
    borderRadius: 25,
    borderWidth: 2,
    height: 15,
    width: 15,
  },
});

export default LegendIcon;
