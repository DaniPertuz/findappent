import React, { FC, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownIcon from '../../../ui/forms/DropdownComponent/DropdownIcon';
import DropDownUpIcon from '../../../ui/forms/DropdownComponent/DropDownUpIcon';
import { ThemeContext } from '../../../../theme/ThemeContext';

const CustomDownArrowIcon = (color: string) => () => <DropDownIcon color={color} />;
const CustomUpArrowIcon = (color: string) => () => <DropDownUpIcon color={color} />;

interface Props {
  items: { label: string, value: string; }[],
  placeholder: string;
  onChange: (value: string) => void;
}

const DropdownChart: FC<Props> = ({ items, placeholder, onChange }) => {
  const { colors } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  return (
    <DropDownPicker
      listMode={'SCROLLVIEW'}
      value={value}
      open={open}
      setOpen={setOpen}
      setValue={setValue}
      items={items}
      onChangeValue={(val) => onChange(val ?? '')}
      placeholder={placeholder}
      ArrowUpIconComponent={CustomUpArrowIcon(colors.darkBlue)}
      ArrowDownIconComponent={CustomDownArrowIcon(colors.darkBlue)}
      showTickIcon={false}
      selectedItemContainerStyle={{ backgroundColor: colors.quaternaryText }}
      dropDownContainerStyle={[{ borderColor: colors.darkBlue, ...styles.dropdown }]}
      textStyle={{ color: colors.darkBlue }}
      style={[{ borderColor: colors.darkBlue, backgroundColor: colors.white }, styles.container]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    borderRadius: 30,
    gap: 10,
    flexDirection: 'row',
    width: 120,
  },
  dropdown: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    width: 120,
  },
});

export default DropdownChart;
