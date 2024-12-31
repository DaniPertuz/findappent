import React, { FC, useContext, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownIcon from './DropdownIcon';
import DropDownUpIcon from './DropDownUpIcon';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  items: { label: string; value: string; }[];
  placeholder: string;
}

const DropdownComponent: FC<Props> = ({ items, placeholder }) => {
  const { colors } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [list, setList] = useState(
    items.map((item) => ({
      label: `${item.label}`,
      value: item.value,
    }))
  );

  return (
    <DropDownPicker
      listMode={'SCROLLVIEW'}
      open={open}
      value={value}
      onChangeValue={() => { }}
      items={list}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setList}
      placeholder={placeholder}
      ArrowDownIconComponent={DropDownIcon}
      ArrowUpIconComponent={DropDownUpIcon}
      style={[styles.dropdown, { backgroundColor: colors.white, borderColor: colors.mainText }]}
      textStyle={{ color: colors.mainText }}
      dropDownContainerStyle={{ backgroundColor: colors.white }}
    />
  );
};


export default DropdownComponent;
