import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import AuthBackButton from '../../../components/auth/AuthBackButton';
import AuthButton from '../../../components/auth/AuthButton';
import AuthFormContainer from '../../../components/auth/AuthFormContainer';
import AuthHeader from '../../../components/auth/AuthHeader';
import RenderInputWithWarning from '../../../components/auth/RenderInputWithWarning';
import WarningMessage from '../../../components/auth/WarningMessage';
import { Background } from '../../../components/ui/Background';
import { MainView } from '../../../components/ui/MainView';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const ResetPasswordScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <MainView>
      <Background />
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <AuthFormContainer>
        <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={appStyles.scrollContainer} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <AuthBackButton />
              <AuthHeader title={'¿Olvidaste tu contraseña?'} subtitle={'Ingresa tu nueva contraseña'} />
            </View>
            <View style={styles.container}>
              <RenderInputWithWarning label={'Ingresa tu correo'} value={email} placeholder={'Ingresa tu correo'} onChange={setEmail} isEmail />
              <RenderInputWithWarning label={'Ingresa tu nueva contraseña'} value={password} placeholder={'Ingresa tu nueva contraseña'} onChange={setPassword} isPassword />
              <RenderInputWithWarning label={'Repite la nueva contraseña'} value={confirmPassword} placeholder={'Repite la nueva contraseña'} customMessage={'Repite la nueva contraseña'} onChange={setConfirmPassword} isPassword />
              <WarningMessage text={''} />
              <AuthButton text={'Guardar e iniciar sesión'} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </AuthFormContainer>
    </MainView>
  );
};

export default ResetPasswordScreen;
