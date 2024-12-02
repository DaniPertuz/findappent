import React, { FC, useContext } from 'react';
import { TextInput, View } from 'react-native';
import AddressIcon from './AddressIcon';
import { useColors } from '../../../../theme/colors';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../styles';

interface Props {
  field: string;
  warning?: boolean;
  onBlur: () => void;
  onChange: (value: string, field: 'address') => void;
}

const AddressInput: FC<Props> = ({ field, warning, onBlur, onChange }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText, gray } = useColors(currentTheme === 'dark');
  const { input, inputContainer, warningBorder } = useStyles();

  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleChangeText = (value: string) => onChange(value, 'address');

  return (
    <View style={containerStyle}>
      <AddressIcon />
      <TextInput
        placeholder={'Dirección, ciudad, depto/estado, país'}
        placeholderTextColor={gray}
        keyboardType={'default'}
        style={input}
        cursorColor={brandMainText}
        selectionColor={gray}
        autoCapitalize={'none'}
        autoCorrect={false}
        numberOfLines={1}
        onBlur={onBlur}
        onChangeText={handleChangeText}
        value={field}
      />
    </View>
  );
};

export default AddressInput;
