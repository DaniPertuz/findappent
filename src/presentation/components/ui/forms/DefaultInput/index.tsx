import React, { FC } from 'react';
import { TextInput } from 'react-native-paper';
import { useIcons } from '../../../../hooks/useIcons';
import { useColors } from '../../../../theme/colors';
import { useStyles } from '../../forms/styles';
import { KeyboardTypeOptions, View } from 'react-native';

interface Props {
  field: string;
  fieldValue: 'name' | 'category' | 'other' | 'phone' | 'whatsapp' | 'instagram';
  placeholder: string;
  icon: string;
  keyboardType: KeyboardTypeOptions;
  warning?: boolean;
  onChange: (value: string, field: 'name' | 'category' | 'other' | 'phone' | 'whatsapp' | 'instagram') => void;
}

export const DefaultInput: FC<Props> = ({ field, fieldValue, placeholder, icon, keyboardType, warning, onChange }) => {
  const { brandMainText, mainText, gray } = useColors();
  const { input, inputContainer, underline, warningBorder } = useStyles();

  const iconElement = useIcons(icon, 20, 20, brandMainText);
  const containerStyle = [
    inputContainer,
    { borderColor: mainText },
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
        underlineStyle={underline}
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
