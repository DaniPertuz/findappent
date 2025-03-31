import React, { FC, useContext } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { usePasswordVisibility } from '../../../../hooks/usePasswordVisibility';
import PasswordVisibleIcon from './PasswordVisibleIcon';
import PasswordIcon from './PasswordIcon';
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

const PasswordInput: FC<Props> = ({ field, fieldValue, placeholder, warning, onChange }) => {
  const { colors } = useContext(ThemeContext);
  const { input, inputContainer, warningBorder } = useStyles();
  const { passwordVisibility, handlePasswordVisibility } = usePasswordVisibility();

  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleChangePassword = (value: string) => onChange(value, fieldValue);

  return (
    <View style={[containerStyle, (warning) && warningBorder]}>
      <PasswordIcon />
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={handleChangePassword}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        secureTextEntry={passwordVisibility}
        selectionColor={colors.gray}
        cursorColor={colors.mainText}
        style={[input, styles.passwordInput, { color: colors.mainText }]}
        value={field}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <PasswordVisibleIcon visible={passwordVisibility} />
      </Pressable>
    </View>
  );
};

export default PasswordInput;
