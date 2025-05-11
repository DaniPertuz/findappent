import { create } from 'zustand';
import { daysOfWeek } from '../utils/daysOfWeek';

type TableRow = [string, string, string];

interface ScheduleStore {
  customized: boolean;
  schedule: string[];
  scheduleUpdated: boolean;
  tableData: TableRow[];
  openingHour: { [key: string]: string };
  closingHour: { [key: string]: string };
  everyday: boolean;
  setCustomized: (value: boolean) => void;
  setOpeningAndClosingHour: (day: string, open: string, close: string) => void;
  setScheduleUpdated: (value: boolean) => void;
  setScheduleArr: (everyday: boolean) => void;
  setEveryday: (everyday: boolean) => void;
  resetSchedule: () => void;
  resetAllSchedule: () => void;
}

const formatHour = (hour: string) =>
  hour.replace('AM', ' AM').replace('PM', ' PM');

export const useScheduleStore = create<ScheduleStore>((set, get) => ({
  customized: false,
  schedule: [],
  scheduleUpdated: false,
  tableData: Array(7).fill(['', '', '']) as TableRow[],
  openingHour: {},
  closingHour: {},
  everyday: false,

  setCustomized: (value) => set({ customized: value }),
  setScheduleUpdated: (value) => set({ scheduleUpdated: value }),
  setEveryday: (value) => set({ everyday: value }),
  setOpeningAndClosingHour: (day, open, close) =>
    set((state) => ({
      openingHour: { ...state.openingHour, [day]: open },
      closingHour: { ...state.closingHour, [day]: close },
    })),
  setScheduleArr: (everyday: boolean) => {
    const { openingHour, closingHour } = get();

    const generateScheduleEntry = (day: string) => {
      const isOpen = everyday || (day !== 'Sábado' && day !== 'Domingo');
      const formattedOpeningHour = isOpen ? openingHour : '00:00';
      const formattedClosingHour = isOpen ? closingHour : '00:00';
      return isOpen ? `${day} ${formattedOpeningHour} ${formattedClosingHour}` : `${day} Cerrado`;
    };

    const generateTableEntry = (day: string) => {
      const isOpen = everyday || (day !== 'Sábado' && day !== 'Domingo');
      const formattedOpeningHour = formatHour(isOpen ? openingHour[day] || '00:00' : 'Cerrado');
      const formattedClosingHour = formatHour(isOpen ? closingHour[day] || '00:00' : 'Cerrado');
      return [day, formattedOpeningHour, formattedClosingHour] as TableRow;
    };

    const newSchedule = daysOfWeek.map(generateScheduleEntry);
    const newTableData = daysOfWeek.map(generateTableEntry);

    set({
      schedule: newSchedule,
      tableData: newTableData,
      scheduleUpdated: true,
    });
  },

  resetSchedule: () => set({ schedule: [] }),

  resetAllSchedule: () => {
    set({
      customized: false,
      schedule: [],
      scheduleUpdated: false,
      openingHour: {},
      closingHour: {},
      tableData: Array(7).fill(['', '', '']) as TableRow[],
    });
  },
}));
