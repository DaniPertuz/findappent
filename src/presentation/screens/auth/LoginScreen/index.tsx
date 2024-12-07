import React, { useContext, useState } from 'react';
import { View, Image, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AuthButton from '../../../components/auth/AuthButton';
import AuthFooter from '../../../components/auth/AuthFooter';
import AuthFormContainer from '../../../components/auth/AuthFormContainer';
import RenderInputWithWarning from '../../../components/auth/RenderInputWithWarning';
import { Background } from '../../../components/ui/Background';
import { BodySmall } from '../../../components/ui/BodySmall';
import { Caption2 } from '../../../components/ui/Caption2';
import { Footnote } from '../../../components/ui/Footnote';
import { H4 } from '../../../components/ui/H4';
import { MainView } from '../../../components/ui/MainView';
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
          </AuthFormContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </MainView>
  );
};

export default LoginScreen;
