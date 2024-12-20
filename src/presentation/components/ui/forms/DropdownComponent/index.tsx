import React, { FC, useContext, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownIcon from './DropdownIcon';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  items: { label: string; value: string; }[];
}

const DropdownComponent: FC<Props> = ({ items }) => {
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
      open={open}
      value={value}
      items={list}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setList}
      placeholder={'Categoría'}
      ArrowDownIconComponent={DropDownIcon}
      style={[styles.dropdown, { backgroundColor: colors.white, borderColor: colors.mainText }]}
      textStyle={{ color: colors.mainText }}
    />
  );
};


export default DropdownComponent;
