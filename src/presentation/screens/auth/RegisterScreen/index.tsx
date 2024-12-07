import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { MainView } from '../../../components/ui/MainView';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import { ThemeContext } from '../../../theme/ThemeContext';
import AuthButton from '../../../components/auth/AuthButton';
import AuthFooter from '../../../components/auth/AuthFooter';
import AuthFormContainer from '../../../components/auth/AuthFormContainer';
import RenderInputWithWarning from '../../../components/auth/RenderInputWithWarning';
import { Background } from '../../../components/ui/Background';
import { BodySmall } from '../../../components/ui/BodySmall';
import { H4 } from '../../../components/ui/H4';
import { appStyles } from '../../../theme/app-styles';
import { styles } from './styles';

const RegisterScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <MainView>
      <Background />
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <AuthFormContainer>
        <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={appStyles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <H4 customColor={colors.mainText}>Crea tu cuenta</H4>
              <BodySmall customColor={colors.mainText}>Ingresa tus datos para crear una cuenta</BodySmall>

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
