import React, { useContext } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import PasswordVisibleIcon from './PasswordVisibleIcon';
import PassowrdIcon from './PasswordIcon';
import { useColors } from '../../../../theme/colors';
import { ThemeContext } from '../../../../theme/ThemeContext';
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
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText, gray } = useColors(currentTheme === 'light');
  const { input, inputContainer, warningBorder } = useStyles();

  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleChangePassword = (value: string) => onChange(value, fieldValue);

  return (
    <View style={[containerStyle, (warning) && warningBorder]}>
      <PassowrdIcon />
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={handleChangePassword}
        placeholder={placeholder}
        placeholderTextColor={gray}
        secureTextEntry={true}
        selectionColor={gray}
        cursorColor={brandMainText}
        style={[input, styles.passwordInput, { color: brandMainText }]}
        value={field}
      />
      <Pressable onPress={() => { }}>
        <PasswordVisibleIcon visible={true} />
      </Pressable>
    </View>
  );
};

export default PasswordInput;
