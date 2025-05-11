import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { Row, Rows, Table } from 'react-native-reanimated-table';
import { ThemeContext } from '../../../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  displaySchedule: string[][];
}

const ScheduleTable: FC<Props> = ({ displaySchedule }) => {
  const { colors } = useContext(ThemeContext);
  const headers: string[] = ['Día', 'Abre', 'Cierra'];

  const convertTo12HourFormat = (time: string) => {
    const [hour, minute] = time.split(':').map((part) => parseInt(part, 10));
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    const minutes = minute.toString().padStart(2, '0');
    return `${hour12}:${minutes} ${ampm}`;
  };

  const isValidHour = (time: string) => {
    return !isNaN(parseInt(time.split(':')[0], 10));
  };

  const convertedSchedule = displaySchedule.map((row) => {
    const [day, openTime, closeTime] = row;

    const convertedOpenTime = isValidHour(openTime) ? convertTo12HourFormat(openTime) : openTime;
    const convertedCloseTime = isValidHour(closeTime) ? convertTo12HourFormat(closeTime) : closeTime;

    return [day, convertedOpenTime, convertedCloseTime];
  });

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: colors.mainText, ...styles.tableBorderWidth }}>
        <Row data={(headers)} style={styles.rowHeight} textStyle={[styles.rowMarginStart, { color: colors.mainText }]} />
        <Rows data={convertedSchedule} textStyle={[styles.rowMargins, { color: colors.mainText }]} />
      </Table>
    </View>
  );
};

export default ScheduleTable;
