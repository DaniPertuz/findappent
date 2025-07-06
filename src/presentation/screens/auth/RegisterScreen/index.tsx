import React from 'react';
import { ScrollView, View } from 'react-native';
import { AuthFormContainer, AuthHeader, RenderInputWithWarning, AuthButton, AuthFooter } from '../../../components/auth';
import { Background, KeyboardAvoidingViewComponent, MainView, StatusBarComponent } from '../../../components/ui';
import { useAuthData } from '../../../hooks/useAuthData';
import { appStyles } from '../../../theme/app-styles';
import { styles } from './styles';

const RegisterScreen = () => {
  const { colors, email, isFieldValid, name, loading, password, goToLogin, onRegister, setEmail, setName, setPassword } = useAuthData();

  return (
    <MainView>
      <Background />
      <StatusBarComponent color={colors.brandMainText} theme={'light-content'} />
      <AuthFormContainer>
        <KeyboardAvoidingViewComponent>
          <ScrollView contentContainerStyle={appStyles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <AuthHeader title={'Crea tu cuenta'} subtitle={'Ingresa tus datos para crear una cuenta'} />
              <View style={styles.inputsContainer}>
                <RenderInputWithWarning label={'Nombre de la empresa'} placeholder={'Ingresa tu nombre'} customMessage={'Ingresa el nombre de la empresa'} value={name} onChange={setName} isFilled={isFieldValid} />
                <RenderInputWithWarning label={'Correo corporativo'} placeholder={'Ingresa tu correo'} isEmail value={email} onChange={setEmail} isFilled={isFieldValid} />
                <RenderInputWithWarning label={'Contraseña'} placeholder={'Ingresa tu contraseña'} isPassword value={password} onChange={setPassword} isFilled={isFieldValid} />
                <AuthButton loading={loading} text={'Crear cuenta'} onPress={onRegister} />
              </View>
            </View>
            <AuthFooter label={'¿Ya tienes una empresa registrada'} link={'Inicia sesión'} onPress={goToLogin} />
          </ScrollView>
        </KeyboardAvoidingViewComponent>
      </AuthFormContainer>
    </MainView>
  );
};

export default RegisterScreen;
