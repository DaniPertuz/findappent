import React, { FC, useContext, useEffect, useState } from 'react';
import { Caption2 } from '../../../ui';
import CustomizedSchedule from '../schedule/CustomizedSchedule';
import BusinessDaysSchedule from '../schedule/BusinessDaysSchedule';
import ScheduleDropdownDays from '../schedule/ScheduleDropdownDays';
import UpdateProfileFormItemContainer from '../UpdateProfileFormItemContainer';
import { ScheduleType } from '../../../../../interfaces/app.interface';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  onChangeSchedule: (value: string | null) => void;
}

const UpdateProfileSchedule: FC<Props> = ({ onChangeSchedule }) => {
  const { colors } = useContext(ThemeContext);
  const [scheduleType, setScheduleType] = useState<string | null>('');

  const handleScheduleTypeChange = (type: string | null) => {
    setScheduleType(type);

    if (type === ScheduleType.BusinessDays || type === ScheduleType.Everyday) {
      onChangeSchedule(null);
    }
  };

  useEffect(() => {
    onChangeSchedule(scheduleType);
  }, [scheduleType, onChangeSchedule]);

  return (
    <UpdateProfileFormItemContainer>
      <Caption2 customColor={colors.mainText}>Horario de atención</Caption2>
      <ScheduleDropdownDays onChange={handleScheduleTypeChange} />
      {scheduleType &&
        <>
          {scheduleType !== 'custom'
            ?
            <BusinessDaysSchedule
              everyday={scheduleType === ScheduleType.BusinessDays}
              sendSchedule={() => { }}
              handleScheduleUpdated={() => { }}
            />
            :
            <CustomizedSchedule everyday sendSchedule={() => { }} handleScheduleUpdated={() => { }} />
          }
        </>
      }
    </UpdateProfileFormItemContainer>
  );
};

export default UpdateProfileSchedule;
