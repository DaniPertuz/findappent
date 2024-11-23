import React from 'react';
import { View } from 'react-native';
import { useIcons } from '../../../../hooks/useIcons';
import { TextInput } from 'react-native-paper';
import { useColors } from '../../../../theme/colors';
import { useStyles } from '../styles';

interface Props {
  field: string;
  warning?: boolean;
  onBlur: () => void;
  onChange: (value: string, field: 'address') => void;
}

const AddressInput = ({ field, warning, onBlur, onChange }: Props) => {
  const { brandMainText, gray, mainText } = useColors();
  const { input, inputContainer, underline, warningBorder } = useStyles();

  const iconElement = useIcons('Mall', 20, 20, brandMainText);
  const containerStyle = [
    inputContainer,
    { borderColor: mainText },
    warning && warningBorder,
  ];

  const handleChangeText = (value: string) => onChange(value, 'address');

  return (
    <View style={containerStyle}>
      {iconElement}
      <TextInput
        placeholder={'Dirección, ciudad, depto, país'}
        placeholderTextColor={gray}
        keyboardType={'default'}
        style={input}
        cursorColor={brandMainText}
        selectionColor={gray}
        underlineStyle={underline}
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
