import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { useIcons } from '../../../../hooks/useIcons';
import { useColors } from '../../../../theme/colors';
import { useStyles } from '../styles';

interface Props {
  field: string;
  warning?: boolean;
  onBlur: () => void;
  onChange: (value: string, field: 'address') => void;
}

const AddressInput: FC<Props> = ({ field, warning, onBlur, onChange }) => {
  const { brandMainText, gray } = useColors();
  const { input, inputContainer, warningBorder } = useStyles();

  const iconElement = useIcons('Mall', 20, 20, brandMainText);
  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleChangeText = (value: string) => onChange(value, 'address');

  return (
    <View style={containerStyle}>
      {iconElement}
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
