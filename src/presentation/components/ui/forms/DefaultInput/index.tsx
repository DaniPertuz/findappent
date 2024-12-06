import React, { FC, useContext } from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import { useColors } from '../../../../theme/colors';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../../forms/styles';

interface Props {
  field: string;
  fieldValue: 'name' | 'email' | 'category' | 'other' | 'phone' | 'whatsapp' | 'instagram';
  placeholder: string;
  iconElement: React.JSX.Element
  keyboardType: KeyboardTypeOptions;
  warning?: boolean;
  onChange: (value: string, field: 'name' | 'email' | 'category' | 'other' | 'phone' | 'whatsapp' | 'instagram') => void;
}

const DefaultInput: FC<Props> = ({ field, fieldValue, placeholder, iconElement, keyboardType, warning, onChange }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText, gray } = useColors(currentTheme === 'light');
  const { input, inputContainer, warningBorder } = useStyles();
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
