import React, { FC, useContext } from 'react';
import { TextInput, View } from 'react-native';
import AddressIcon from './AddressIcon';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../styles';

interface Props {
  field: string;
  warning?: boolean;
  onBlur: () => void;
  onChange: (value: string, field: 'address') => void;
}

const AddressInput: FC<Props> = ({ field, warning, onBlur, onChange }) => {
  const { colors } = useContext(ThemeContext);
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
        placeholderTextColor={colors.gray}
        keyboardType={'default'}
        style={[{ color: colors.mainText }, input]}
        cursorColor={colors.mainText}
        selectionColor={colors.gray}
        autoCapitalize={'none'}
        autoCorrect={false}
        numberOfLines={1}
        onBlur={onBlur}
        onSubmitEditing={onBlur}
        returnKeyType={'done'}
        onChangeText={handleChangeText}
        value={field}
      />
    </View>
  );
};

export default AddressInput;
