import React, { useContext, useState } from 'react';
import { View, Image, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AuthFormContainer from '../../../components/auth/AuthFormContainer';
import { Background } from '../../../components/ui/Background';
import { Body } from '../../../components/ui/Body';
import { BodySmall } from '../../../components/ui/BodySmall';
import { ButtonComponent } from '../../../components/ui/ButtonComponent';
import { Caption1 } from '../../../components/ui/Caption1';
import { Caption2 } from '../../../components/ui/Caption2';
import { Footnote } from '../../../components/ui/Footnote';
import { H4 } from '../../../components/ui/H4';
import { MainView } from '../../../components/ui/MainView';
import { DefaultInput, PasswordInput } from '../../../components/ui/forms';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const LoginScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ICONS = {
    light: require('../../../../assets/icons/fa_complete_color.png'),
    dark: require('../../../../assets/icons/FA_COMPLETE_White.png'),
  };
  const logoSource = ICONS[currentTheme];

  const renderInputWithWarning = (label: string, value: string, placeholder: string, onChange: (value: string) => void, isPassword = false) => (
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
            <Caption2 customColor={colors.error}>Por favor, ingresa tu {label.toLowerCase()}</Caption2>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <MainView>
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <Background />
      <KeyboardAvoidingView style={styles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
          <AuthFormContainer>
            <View style={styles.container}>
              <Image style={styles.image} source={logoSource} />
              <View style={styles.imageText}>
                <Footnote customColor={colors.mainText}>Empresas</Footnote>
              </View>
              <View style={styles.labelsContainer}>
                <H4 customColor={colors.mainText}>Bienvenido</H4>
                <BodySmall customColor={colors.mainText}>Ingresa tus credenciales para continuar</BodySmall>
              </View>
              {renderInputWithWarning('Correo corporativo', email, 'Ingresa tu correo', setEmail)}
              {renderInputWithWarning('Contraseña', password, 'Ingresa tu contraseña', setPassword, true)}
              <View style={styles.forgotPasswordContainer}>
                <Pressable>
                  <Caption2 customColor={colors.darkBlue}>¿Olvidaste tu contraseña?</Caption2>
                </Pressable>
              </View>
              <View style={styles.loginButtonContainer}>
                <ButtonComponent>
                  <Body customColor={colors.brandWhite}>Iniciar Sesión</Body>
                </ButtonComponent>
              </View>
              <View style={styles.createAccountContainer}>
                <Caption1 customColor={colors.mainText}>¿No tienes una empresa registrada?</Caption1>
                <Caption1 customColor={colors.darkBlue}>Crear cuenta</Caption1>
              </View>
            </View>
          </AuthFormContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </MainView>
  );
};

export default LoginScreen;
