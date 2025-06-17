import React, { FC, useContext, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownIcon from './DropdownIcon';
import DropDownUpIcon from './DropDownUpIcon';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';

interface ItemType {
  label: string;
  value: string;
}

interface Props {
  initialValue?: string | null;
  items: ItemType[];
  placeholder: string;
  onChange: (value: string | null) => void;
}

const ArrowDownIcon: FC<{ color: string }> = ({ color }) => <DropDownIcon color={color} />;

const DropdownComponent: FC<Props> = ({ initialValue, items, placeholder, onChange }) => {
  const { colors } = useContext(ThemeContext);
  const defaultValue = items.find(item => item.value === initialValue?.toLowerCase())?.value ?? null;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(defaultValue);
  const [list, setList] = useState(
    items.map((item) => ({
      label: `${item.label}`,
      value: item.value,
      // icon: () => <Image source={{ uri: getIconUrl(item.value, currentTheme, true) }} style={styles.iconSize} />,
    }))
  );

  const setArrowDownIcon = () => <ArrowDownIcon color={colors.mainText} />;
  const setArrowUpIcon = () => <DropDownUpIcon color={colors.mainText} />;

  return (
    <DropDownPicker
      listMode={'SCROLLVIEW'}
      open={open}
      value={value}
      onChangeValue={onChange}
      items={list}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setList}
      placeholder={placeholder}
      ArrowDownIconComponent={setArrowDownIcon}
      ArrowUpIconComponent={setArrowUpIcon}
      style={[styles.dropdown, { backgroundColor: colors.white, borderColor: colors.mainText }]}
      textStyle={{ color: colors.mainText }}
      dropDownContainerStyle={{ backgroundColor: colors.white, borderColor: colors.mainText }}
      // renderListItem={({ item }) => (
      //   <View style={item.icon ? styles.itemIcon : null}>
      //     {item.icon ? item.icon() : null}
      //     <Caption1 customColor={colors.mainText}>{item.label}</Caption1>
      //   </View>
      // )}
    />
  );
};

export default DropdownComponent;
