import React from 'react';
import { Pressable, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useIcons } from '../../../../hooks/useIcons';
import { useColors } from '../../../../theme/colors';
import { useStyles } from '../styles';
import { styles } from './styles';

interface Props {
  field: string;
  fieldValue: 'password' | 'confirmPassword';
  placeholder: string;
  warning?: boolean;
  onChange: (value: string, field: 'password' | 'confirmPassword') => void;
}

const PasswordInput = ({ field, fieldValue, placeholder, warning, onChange }: Props) => {
  const { brandMainText, gray } = useColors();
  const { input, inputContainer, underline, warningBorder } = useStyles();

  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleChangePassword = (value: string) => onChange(value, fieldValue);

  return (
    <View style={[containerStyle, (warning) && warningBorder]}>
      {useIcons('Lock', 20, 20, brandMainText)}
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={handleChangePassword}
        placeholder={placeholder}
        placeholderTextColor={gray}
        secureTextEntry={true}
        selectionColor={gray}
        cursorColor={brandMainText}
        underlineStyle={underline}
        contentStyle={{ color: brandMainText }}
        style={[input, styles.passwordInput]}
        value={field}
      />
      <Pressable onPress={() => { }}>
        {useIcons('Eye', 20, 20, brandMainText)}
      </Pressable>
    </View>
  );
};

export default PasswordInput;
