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

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: colors.mainText, ...styles.tableBorderWidth }}>
        <Row data={(headers)} style={styles.rowHeight} textStyle={[styles.rowMarginStart, { color: colors.mainText }]} />
        <Rows data={displaySchedule} textStyle={[styles.rowMargins, { color: colors.mainText }]} />
      </Table>
    </View>
  );
};

export default ScheduleTable;
