import React, { FC, useContext, useState } from 'react';
import { View } from 'react-native';
import { Caption2 } from '../../../ui';
import CustomizedSchedule from '../schedule/CustomizedSchedule';
import BusinessDaysSchedule from '../schedule/BusinessDaysSchedule';
import ScheduleDropdownDays from '../schedule/ScheduleDropdownDays';
import UpdateProfileFormItemContainer from '../UpdateProfileFormItemContainer';
import { IPlace } from '../../../../../core/entities';
import { ScheduleType } from '../../../../../interfaces/app.interface';
import { ThemeContext } from '../../../../theme/ThemeContext';
import ScheduleTable from '../schedule/ScheduleTable';
import ScheduleEditButton from '../schedule/ScheduleEditButton';

interface Props {
  place: IPlace;
  onChangeSchedule: (value: string[]) => void;
}

const UpdateProfileSchedule: FC<Props> = ({ place, onChangeSchedule }) => {
  const displaySchedule = place.schedule.map(schedule => schedule.split(' ').map(s => s.replace('AM', ' AM').replace('PM', ' PM')));
  const isScheduleAvailable = place.schedule.length !== 0;
  const gap = { gap: 10 };
  const { colors } = useContext(ThemeContext);
  const [editSchedule, setEditSchedule] = useState(isScheduleAvailable);
  const [isScheduleUpdated, setIsScheduleUpdated] = useState(false);
  const [scheduleType, setScheduleType] = useState<string | null>('');

  const handleScheduleTypeChange = (type: string | null) => {
    setScheduleType(type);
  };

  const handleEditSchedule = (edited: boolean) => {
    setIsScheduleUpdated(edited);
  };

  const handleEditPress = () => {
    setEditSchedule(!editSchedule);
    setIsScheduleUpdated(false);
  };

  return (
    <UpdateProfileFormItemContainer>
      <Caption2 customColor={colors.mainText}>Horario de atención</Caption2>
      {editSchedule
        ?
        <View style={gap}>
          <ScheduleTable displaySchedule={displaySchedule} />
          <ScheduleEditButton onPress={handleEditPress} />
        </View>
        :
        <>
          {!isScheduleUpdated && <ScheduleDropdownDays onChange={handleScheduleTypeChange} />}
          <View>
            {scheduleType !== 'custom'
              ?
              <BusinessDaysSchedule
                everyday={scheduleType === ScheduleType.BusinessDays}
                sendSchedule={onChangeSchedule}
                handleScheduleUpdated={handleEditSchedule}
              />
              :
              <CustomizedSchedule everyday sendSchedule={onChangeSchedule} handleScheduleUpdated={handleEditSchedule} />
            }
          </View>
        </>
      }
    </UpdateProfileFormItemContainer>
  );
};

export default UpdateProfileSchedule;
