import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { deviceWidth } from '../../../../../utils/dimensions';
import { ThemeColors } from '../../../../theme/ThemeColors';
import DropdownChart from './DropdownChart';

interface Props {
  colors: ThemeColors;
  isLoading: boolean;
  monthsAvailable: { label: string, value: string; }[];
  yearsAvailable: { label: string, value: string; }[];
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownCharts: FC<Props> = ({ colors, isLoading, monthsAvailable, yearsAvailable, setSelectedMonth, setSelectedYear }) => {
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={25} color={colors.mainText} />
      ) : (
        <View style={[styles.dropdownContainer, { width: deviceWidth * 0.4 }]}>
          <DropdownChart items={monthsAvailable} placeholder={'Mes'} onChange={setSelectedMonth} />
          <DropdownChart items={yearsAvailable} placeholder={'Año'} onChange={setSelectedYear} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
  },
});

export default DropdownCharts;
