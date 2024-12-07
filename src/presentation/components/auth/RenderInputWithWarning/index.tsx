import React, { FC, useContext } from 'react';
import { View, Image } from 'react-native';
import { Caption2 } from '../../ui/Caption2';
import { PasswordInput, DefaultInput } from '../../ui/forms';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  placeholder: string;
  customMessage?: string;
  isEmail?: boolean;
  isPassword?: boolean;
  onChange: (value: string) => void;
}

const RenderInputWithWarning: FC<Props> = ({ label, value, placeholder, customMessage, isEmail = false, isPassword = false, onChange }) => {
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
            fieldValue={isEmail ? 'email' : 'name'}
            placeholder={placeholder}
            iconElement={
              <Image
                source={
                  isEmail
                    ? require('../../../../assets/icons/envelope.png')
                    : require('../../../../assets/icons/users.png')
                }
                style={appStyles.inputIcon}
              />
            }
            keyboardType={isEmail ? 'email-address' : 'default'}
            onChange={onChange} />
        )}
        {value === '' && (
          <View style={styles.warningContainer}>
            <Image style={appStyles.inputIcon} source={require('../../../../assets/icons/warning.png')} />
            <Caption2 customColor={colors.error}>{customMessage ?? `Ingresa tu ${label.toLowerCase()}`}</Caption2>
          </View>
        )}
      </View>
    </View>
  );
};

export default RenderInputWithWarning;
