import React, { FC, useContext } from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import { useIcons } from '../../../../hooks/useIcons';
import { useColors } from '../../../../theme/colors';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../../forms/styles';

interface Props {
  field: string;
  fieldValue: 'name' | 'category' | 'other' | 'phone' | 'whatsapp' | 'instagram';
  placeholder: string;
  icon: string;
  keyboardType: KeyboardTypeOptions;
  warning?: boolean;
  onChange: (value: string, field: 'name' | 'category' | 'other' | 'phone' | 'whatsapp' | 'instagram') => void;
}

const DefaultInput: FC<Props> = ({ field, fieldValue, placeholder, icon, keyboardType, warning, onChange }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText, gray } = useColors(currentTheme === 'light');
  const { input, inputContainer, warningBorder } = useStyles();

  const iconElement = useIcons(icon, 20, 20, brandMainText);
  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleChangeText = (value: string) => onChange(value, fieldValue);

  return (
    <View style={containerStyle}>
      {iconElement}
      <TextInput
        style={[{ color: brandMainText }, input]}
        placeholder={placeholder}
        placeholderTextColor={gray}
        cursorColor={brandMainText}
        keyboardType={keyboardType}
        selectionColor={gray}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={handleChangeText}
        value={field}
      />
    </View>
  );
};

export default DefaultInput;
