import React, { FC, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';

interface Props {
  items: { label: string; value: string }[];
}

const DropdownComponent: FC<Props> = ({ items }) => {
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
      style={styles.dropdown}
    />
  );
};

export default DropdownComponent;
