import React, { FC } from 'react';
import { View } from 'react-native';
import CustomizedSchedule from '../CustomizedSchedule';
import ScheduleTable from '../ScheduleTable';
import ScheduleDropdownHours from '../ScheduleDropdownHours';
import ScheduleEditButton from '../ScheduleEditButton';
import ScheduleSaveButton from '../ScheduleSaveButton';
import SchedulerCheckBox from '../SchedulerCheckBox';
import { useBusinessDaysSchedule } from '../../../../../hooks/useBusinessDaysSchedule';
import { styles } from './styles';

interface Props {
  everyday: boolean;
  sendSchedule: (schedule: string[]) => void;
  handleScheduleUpdated: (value: boolean) => void;
}

const BusinessDaysSchedule: FC<Props> = ({ everyday, sendSchedule, handleScheduleUpdated }) => {
  const {
    customized,
    schedule,
    scheduleUpdated,
    tableData,
    onEdit,
    setClosingHour,
    setCustomized,
    setOpeningHour,
    setScheduleArr,
    handleUpdateSchedule,
  } = useBusinessDaysSchedule({ sendSchedule, handleScheduleUpdated, everyday });
  const displaySchedule = (scheduleUpdated || schedule.length !== 0) ? 'none' : 'flex';

  return (
    <View style={styles.container}>
      <View style={{ display: displaySchedule }}>
        <SchedulerCheckBox customized={customized} onClick={() => setCustomized(!customized)} />
      </View>
      <View style={styles.scheduleContainer}>
        {(!customized) ? (
          (schedule.length === 0) ? (
            <View style={styles.dropdownContainer}>
              <ScheduleDropdownHours placeholder={'Abre'} onChange={setOpeningHour} />
              <ScheduleDropdownHours placeholder={'Cierra'} onChange={setClosingHour} />
              <ScheduleSaveButton onPress={setScheduleArr} />
            </View>
          ) : (
            <View style={[styles.container, styles.gap]}>
              <ScheduleTable displaySchedule={tableData} />
              <ScheduleEditButton onPress={onEdit} />
            </View>
          )
        ) : (
          <View style={styles.container}>
            <CustomizedSchedule everyday={everyday} sendSchedule={sendSchedule} handleScheduleUpdated={handleUpdateSchedule} />
          </View>
        )
        }
      </View>
    </View>
  );
};

export default BusinessDaysSchedule;
