import { useEffect, useState } from 'react';
import { daysOfWeek } from '../../utils/daysOfWeek';

interface Props {
  sendSchedule: (schedule: string[]) => void;
  handleScheduleUpdated: (value: boolean) => void;
  everyday: boolean;
}

export const useBusinessDaysSchedule = ({ sendSchedule, handleScheduleUpdated, everyday }: Props) => {
  const [customized, setCustomized] = useState(false);
  const [schedule, setSchedule] = useState<string[]>([]);
  const [scheduleUpdated, setScheduleUpdated] = useState<boolean>(false);
  const [tableData, setTableData] = useState<[string, string, string][]>(Array(7).fill(['', '', '']));
  const [openingHour, setOpeningHour] = useState<string | null>('');
  const [closingHour, setClosingHour] = useState<string | null>('');

  const formatHour = (hour: string) => hour.replace('AM', ' AM').replace('PM', ' PM');

  const setScheduleArr = () => {
    setScheduleUpdated(true);

    const generateScheduleEntry = (day: string) => {
      const isOpen = everyday || (day !== 'Sábado' && day !== 'Domingo');
      const formattedOpeningHour = (isOpen ? openingHour : '00:00');
      const formattedClosingHour = (isOpen ? closingHour : '00:00');
      return isOpen ? `${day} ${formattedOpeningHour} ${formattedClosingHour}` : `${day} Cerrado`;
    };

    const generateTableEntry = (day: string) => {
      const isOpen = everyday || (day !== 'Sábado' && day !== 'Domingo');
      const formattedOpeningHour = formatHour(isOpen ? openingHour || '00:00' : 'Cerrado');
      const formattedClosingHour = formatHour(isOpen ? closingHour || '00:00' : 'Cerrado');
      return [day, formattedOpeningHour, formattedClosingHour] as [string, string, string];
    };

    const newSchedule = daysOfWeek.map(generateScheduleEntry);
    setSchedule(newSchedule);

    const newTableData = daysOfWeek.map(generateTableEntry);
    setTableData(newTableData);
  };

  const onEdit = () => {
    setSchedule([]);
    setScheduleUpdated(false);
  };

  const handleUpdateSchedule = (value: boolean) => {
    setScheduleUpdated(value);
    handleScheduleUpdated(value);
  };

  useEffect(() => {
    sendSchedule(schedule);
    handleScheduleUpdated(schedule.length !== 0);
  }, [handleScheduleUpdated, schedule, sendSchedule]);

  useEffect(() => {
    setCustomized(false);
    setSchedule([]);
    setScheduleUpdated(false);
    setOpeningHour('');
    setClosingHour('');
    setTableData(Array(7).fill(['', '', '']));
  }, [everyday]);

  return {
    customized,
    daysOfWeek,
    schedule,
    scheduleUpdated,
    tableData,
    handleUpdateSchedule,
    onEdit,
    setCustomized,
    setClosingHour,
    setOpeningHour,
    setScheduleArr,
    setScheduleUpdated,
  };
};
