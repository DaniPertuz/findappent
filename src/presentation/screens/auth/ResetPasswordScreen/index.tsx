import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { AuthBackButton, AuthButton, AuthFormContainer, AuthHeader, RenderInputWithWarning, WarningMessage } from '../../../components/auth';
import { Background, MainView, StatusBarComponent } from '../../../components/ui';
import { useAuthData } from '../../../hooks/useAuthData';
import { appStyles } from '../../../theme/app-styles';
import { styles } from './styles';

const ResetPasswordScreen = () => {
  const { colors, confirmPassword, email, isFieldValid, loading, password, goBack, onResetPassword, setConfirmPassword, setEmail, setPassword } = useAuthData();

  return (
    <MainView>
      <Background />
      <StatusBarComponent color={colors.brandMainText} theme={'light-content'} />
      <AuthFormContainer>
        <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={appStyles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <AuthBackButton onPress={goBack} />
              <AuthHeader title={'¿Olvidaste tu contraseña?'} subtitle={'Ingresa tu nueva contraseña'} />
            </View>
            <View style={styles.container}>
              <RenderInputWithWarning label={'Ingresa tu correo'} value={email} placeholder={'Ingresa tu correo'} onChange={setEmail} isEmail isFilled={isFieldValid} />
              <RenderInputWithWarning label={'Ingresa tu nueva contraseña'} value={password} placeholder={'Ingresa tu nueva contraseña'} onChange={setPassword} isPassword isFilled={isFieldValid} />
              <RenderInputWithWarning label={'Repite la nueva contraseña'} value={confirmPassword} placeholder={'Repite la nueva contraseña'} customMessage={'Repite la nueva contraseña'} onChange={setConfirmPassword} isPassword isFilled={isFieldValid} />
              <WarningMessage text={''} />
              <AuthButton loading={loading} text={'Guardar e iniciar sesión'} onPress={onResetPassword} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </AuthFormContainer>
    </MainView>
  );
};

export default ResetPasswordScreen;
