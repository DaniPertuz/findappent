import React, { useContext } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import PasswordVisibleIcon from './PasswordVisibleIcon';
import PassowrdIcon from './PasswordIcon';
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
  const { colors } = useContext(ThemeContext);
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
        placeholderTextColor={colors.gray}
        secureTextEntry={true}
        selectionColor={colors.gray}
        cursorColor={colors.mainText}
        style={[input, styles.passwordInput, { color: colors.mainText }]}
        value={field}
      />
      <Pressable onPress={() => { }}>
        <PasswordVisibleIcon visible={true} />
      </Pressable>
    </View>
  );
};

export default PasswordInput;
