import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { AuthFormContainer, AuthHeader, RenderInputWithWarning, AuthButton, AuthFooter } from '../../../components/auth';
import { Background, MainView, StatusBarComponent } from '../../../components/ui';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const RegisterScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <MainView>
      <Background />
      <StatusBarComponent color={colors.brandMainText} theme={'light-content'} />
      <AuthFormContainer>
        <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={appStyles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <AuthHeader title={'Crea tu cuenta'} subtitle={'Ingresa tus datos para crear una cuenta'} />
              <View style={styles.inputsContainer}>
                <RenderInputWithWarning label={'Nombre de la empresa'} placeholder={'Ingresa tu nombre'} customMessage={'Ingresa el nombre de la empresa'} value={name} onChange={setName} />
                <RenderInputWithWarning label={'Correo corporativo'} placeholder={'Ingresa tu correo'} isEmail value={email} onChange={setEmail} />
                <RenderInputWithWarning label={'Contraseña'} placeholder={'Ingresa tu contraseña'} isPassword value={password} onChange={setPassword} />
                <AuthButton text={'Crear cuenta'} />
              </View>
            </View>
            <AuthFooter label={'¿Ya tienes una empresa registrada'} link={'Inicia sesión'} />
          </ScrollView>
        </KeyboardAvoidingView>
      </AuthFormContainer>
    </MainView>
  );
};

export default RegisterScreen;
