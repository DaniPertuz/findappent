import React, { useContext, useState } from 'react';
import { View, Image, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AuthFormContainer, AuthFooter, AuthHeader, RenderInputWithWarning, AuthButton } from '../../../components/auth';
import { Background, Footnote, Caption2, MainView, StatusBarComponent } from '../../../components/ui';
import { appStyles } from '../../../theme/app-styles';
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
              <RenderInputWithWarning label={'Correo corporativo'} value={email} placeholder={'Ingresa tu correo'} onChange={setEmail} isEmail={true} />
              <RenderInputWithWarning label={'Contraseña'} value={password} placeholder={'Ingresa tu contraseña'} onChange={setPassword} />
              <View style={styles.forgotPasswordContainer}>
                <Pressable>
                  <Caption2 customColor={colors.darkBlue}>¿Olvidaste tu contraseña?</Caption2>
                </Pressable>
              </View>
              <AuthButton text={'Iniciar sesión'} />
              <AuthFooter label={'¿No tienes una empresa registrada?'} link={'Crear cuenta'} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </AuthFormContainer>
    </MainView>
  );
};

export default LoginScreen;
