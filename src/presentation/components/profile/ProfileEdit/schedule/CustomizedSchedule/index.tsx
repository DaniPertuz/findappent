import React, { FC } from 'react';
import { View } from 'react-native';
import ScheduleDropdownHours from '../ScheduleDropdownHours';
import ScheduleEditButton from '../ScheduleEditButton';
import ScheduleSaveButton from '../ScheduleSaveButton';
import ScheduleTable from '../ScheduleTable';
import { Caption1 } from '../../../../ui';
import { styles } from './styles';
import { useCustomizedSchedule } from '../../../../../hooks/useCustomizedSchedule';

interface Props {
  everyday: boolean;
  sendSchedule: (schedule: string[]) => void;
  handleScheduleUpdated: (value: boolean) => void;
}

const CustomizedSchedule: FC<Props> = ({ everyday, sendSchedule, handleScheduleUpdated }) => {
  const {
    closingHours,
    colors,
    daysOfWeek,
    inputWidth,
    openingHours,
    schedule,
    tableData,
    setOpeningAndClosingHour,
    setSchedule,
    setScheduleArr,
  } = useCustomizedSchedule({ sendSchedule, handleScheduleUpdated });

  const renderDropdowns = (day: string, label: string) => (
    <View key={day} style={styles.hoursDropdownContainer}>
      <Caption1 customColor={colors.mainText}>{label}</Caption1>
      <View style={{ width: inputWidth }}>
        <ScheduleDropdownHours
          custom
          placeholder="Abre"
          onChange={(item) => setOpeningAndClosingHour(day, item!, closingHours[day] || '')}
        />
      </View>
      <View style={{ width: inputWidth }}>
        <ScheduleDropdownHours
          custom
          placeholder="Cierra"
          onChange={(item) => setOpeningAndClosingHour(day, openingHours[day] || '', item!)}
        />
      </View>
    </View>
  );

  return (
    <>
      {schedule.length === 0 ? (
        <View style={styles.container}>
          {daysOfWeek.slice(0, 5).map((day) => renderDropdowns(day, day.slice(0, 3)))}
          {everyday && (
            <>
              {renderDropdowns('Saturday', 'Sáb')}
              {renderDropdowns('Sunday', 'Dom')}
            </>
          )}
          <ScheduleSaveButton onPress={setScheduleArr} />
        </View>
      ) : (
        <View style={[styles.container, styles.gap]}>
          <ScheduleTable displaySchedule={tableData} />
          <ScheduleEditButton onPress={() => setSchedule([])} />
        </View>
      )}
    </>
  );
};

export default CustomizedSchedule;
