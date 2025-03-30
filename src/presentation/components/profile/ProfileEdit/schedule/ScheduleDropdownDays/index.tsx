import React, { FC } from 'react';
import { DropdownComponent } from '../../../../ui/forms';
import { ScheduleType } from '../../../../../../interfaces/app.interface';

const ScheduleDropdownDays: FC<{ onChange: (value: string | null) => void; }> = ({ onChange }) => {
  const daysOfWeek = [
    { label: 'Lunes a Domingo', value: ScheduleType.BusinessDays },
    { label: 'Lunes a Viernes', value: ScheduleType.Everyday },
    { label: 'Personalizado', value: ScheduleType.Custom },
  ];

  return (
    <DropdownComponent onChange={onChange} placeholder={'Días de atención'} items={daysOfWeek} />
  );
};

export default ScheduleDropdownDays;
