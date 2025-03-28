import React, { FC, useContext } from 'react';
import { View, Image } from 'react-native';
import { getIconUrl } from '../../../../utils/icon-url';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';
import { Caption2 } from '../../ui';
import { PasswordInput, DefaultInput } from '../../ui/forms';
import WarningMessage from '../WarningMessage';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  placeholder: string;
  customMessage?: string;
  isEmail?: boolean;
  isPassword?: boolean;
  isFilled: boolean;
  onChange: (value: string) => void;
}

const RenderInputWithWarning: FC<Props> = ({ label, value, placeholder, customMessage, isEmail = false, isPassword = false, isFilled, onChange }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
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
                source={{ uri: getIconUrl(isEmail ? 'envelope' : 'users', currentTheme, true) }}
                style={appStyles.inputIcon}
              />
            }
            keyboardType={isEmail ? 'email-address' : 'default'}
            onChange={onChange} />
        )}
        {!isFilled && <WarningMessage text={customMessage ?? `Ingresa tu ${label.toLowerCase()}`} />}
      </View>
    </View>
  );
};

export default RenderInputWithWarning;
