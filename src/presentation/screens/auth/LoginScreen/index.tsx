import React from 'react';
import { View, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AuthFormContainer, AuthFooter, AuthHeader, AuthButton, ForgotPasswordButton, RenderInputWithWarning } from '../../../components/auth';
import { Background, Footnote, MainView, StatusBarComponent } from '../../../components/ui';
import { appStyles } from '../../../theme/app-styles';
import { styles } from './styles';
import { useAuthData } from '../../../hooks/useAuthData';

const LoginScreen = () => {
  const { colors, email, isFieldValid, loading, logoSource, password, goToRegister, goToResetPassword, onLogin, setEmail, setPassword } = useAuthData();

  return (
    <MainView>
      <StatusBarComponent color={colors.brandMainText} theme={'light-content'} />
      <Background />
      <AuthFormContainer>
        <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={appStyles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Image style={styles.image} source={logoSource} />
              <View style={styles.imageText}>
                <Footnote customColor={colors.mainText}>Empresas</Footnote>
              </View>
              <AuthHeader title={'Bienvenido'} subtitle={'Ingresa tus credenciales para continuar'} />
              <RenderInputWithWarning label={'Correo corporativo'} value={email} placeholder={'Ingresa tu correo'} onChange={setEmail} isEmail isFilled={isFieldValid} />
              <RenderInputWithWarning label={'Contraseña'} value={password} placeholder={'Ingresa tu contraseña'} onChange={setPassword} isPassword isFilled={isFieldValid} />
              <ForgotPasswordButton onPress={goToResetPassword} />
              <AuthButton loading={loading} text={'Iniciar sesión'} onPress={onLogin} />
              <AuthFooter label={'¿No tienes una empresa registrada?'} link={'Crear cuenta'} onPress={goToRegister} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </AuthFormContainer>
    </MainView>
  );
};

export default LoginScreen;
