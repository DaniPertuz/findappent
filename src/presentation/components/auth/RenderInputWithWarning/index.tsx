import React, { FC, useContext } from 'react';
import { View, Image } from 'react-native';
import { Caption2 } from '../../ui/Caption2';
import { PasswordInput, DefaultInput } from '../../ui/forms';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  placeholder: string;
  customMessage?: string;
  isPassword?: boolean;
  onChange: (value: string) => void;
}

const RenderInputWithWarning: FC<Props> = ({ label, value, placeholder, customMessage, isPassword = false, onChange }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.inputsContainer}>
      <Caption2 customColor={colors.mainText}>{label}</Caption2>
      <View style={styles.inputWarningContainer}>
        {isPassword ? (
          <PasswordInput field={value} placeholder={placeholder} onChange={onChange} fieldValue={'password'} />
        ) : (
          <DefaultInput
            field={value}
            fieldValue={'email'}
            placeholder={placeholder}
            iconElement={<Image source={require('../../../../assets/icons/envelope.png')} style={styles.inputIcon} />}
            keyboardType="default"
            onChange={onChange} />
        )}
        {value === '' && (
          <View style={styles.warningContainer}>
            <Image style={styles.inputIcon} source={require('../../../../assets/icons/warning.png')} />
            <Caption2 customColor={colors.error}>{customMessage ?? `Ingresa tu ${label.toLowerCase()}`}</Caption2>
          </View>
        )}
      </View>
    </View>
  );
};

export default RenderInputWithWarning;
