import React, { FC, useContext } from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import { useStyles } from '../../forms/styles';
import { ThemeContext } from '../../../../theme/ThemeContext';

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
  const { colors } = useContext(ThemeContext);
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
        style={[{ color: colors.mainText }, input]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        cursorColor={colors.mainText}
        keyboardType={keyboardType}
        selectionColor={colors.gray}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={handleChangeText}
        value={field}
      />
    </View>
  );
};

export default DefaultInput;
