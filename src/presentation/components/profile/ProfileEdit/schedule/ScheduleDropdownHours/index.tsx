import React, { FC } from 'react';
import { DropdownComponent } from '../../../../ui/forms';

interface Props {
  custom?: boolean;
  placeholder: string;
  onChange: (value: string | null) => void;
}

const ScheduleDropdownHours: FC<Props> = ({ custom, placeholder, onChange }) => {
  const hours = [
    ...(custom ? [{ label: 'Cerrado', value: 'Cerrado' }] : []),
    ...Array.from({ length: 24 }, (_, index) => [
      { label: `${index.toString().padStart(2, '0')}:00`, value: `${index.toString().padStart(2, '0')}:00` },
      { label: `${index.toString().padStart(2, '0')}:30`, value: `${index.toString().padStart(2, '0')}:30` },
    ]).flat(),
  ];

  return (
    <DropdownComponent placeholder={placeholder} items={hours} onChange={onChange} />
  );
};

export default ScheduleDropdownHours;
