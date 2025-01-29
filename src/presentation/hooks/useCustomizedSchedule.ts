import { useContext, useState, useCallback, useEffect } from 'react';
import { deviceWidth } from '../../utils/dimensions';
import { ThemeContext } from '../theme/ThemeContext';
import { daysOfWeek } from '../../utils/daysOfWeek';

interface Props {
  sendSchedule: (schedule: string[]) => void;
  handleScheduleUpdated: (value: boolean) => void;
}

export const useCustomizedSchedule = ({ sendSchedule, handleScheduleUpdated }: Props) => {
  const { colors } = useContext(ThemeContext);
  const [schedule, setSchedule] = useState<string[]>([]);
  const [tableData, setTableData] = useState<[string, string, string][]>(Array(7).fill(['', '', '']));
  const [openingHours, setOpeningHours] = useState<{ [key: string]: string; }>({});
  const [closingHours, setClosingHours] = useState<{ [key: string]: string; }>({});
  const inputWidth = deviceWidth * 0.35;

  const setOpeningAndClosingHour = (day: string, openingHour: string, closingHour: string) => {
    setOpeningHours((prev) => ({ ...prev, [day]: openingHour }));
    setClosingHours((prev) => ({ ...prev, [day]: closingHour }));
    updateTableData();
  };

  const updateTableData = useCallback(() => {
    const newTableData: [string, string, string][] = daysOfWeek.map((day) => [
      day,
      openingHours[day] || '00:00',
      closingHours[day] || '00:00',
    ]);
    setTableData(newTableData);
  }, [closingHours, openingHours]);

  const setScheduleArr = () => {
    const newSchedule = daysOfWeek.map(
      (day) => `${day} ${openingHours[day]} ${closingHours[day]}`
    );
    setSchedule(newSchedule);
  };

  useEffect(() => {
    updateTableData();
    sendSchedule(schedule);
    handleScheduleUpdated(schedule.length !== 0);
  }, [openingHours, closingHours, schedule]);

  return {
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
  };
};
