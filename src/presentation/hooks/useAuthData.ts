import { useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { roles } from '../../interfaces/app.interface';
import { useAuthStore } from '../../store/authStore';
import { RootStackParams } from '../navigation/MainNavigator';
import { ThemeContext } from '../theme/ThemeContext';

export const useAuthData = () => {
  const [isFieldValid, setIsFieldValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { colors, currentTheme } = useContext(ThemeContext);
  const login = useAuthStore(state => state.login);
  const register = useAuthStore(state => state.register);
  const updateUserPassword = useAuthStore(state => state.updateUserPassword);
  const ICONS = {
    light: require('../../assets/icons/fa_complete_color.png'),
    dark: require('../../assets/icons/FA_COMPLETE_White.png'),
  };
  const logoSource = ICONS[currentTheme];
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const goBack = () => navigation.goBack();

  const goToLogin = () => navigation.push('LoginScreen');

  const goToRegister = () => navigation.push('RegisterScreen');

  const goToResetPassword = () => navigation.navigate('NewPasswordScreen');

  const onLogin = async () => {
    Keyboard.dismiss();
    setErrorMessage('');
    setLoading(true);
    if (email.length === 0 || password.length === 0) {
      setIsFieldValid(false);
      setLoading(false);
      return;
    }

    const resp = await login(email, password);

    if (!resp) {
      setLoading(false);
      setErrorMessage('No se pudo iniciar sesión');
      return;
    }

    if (resp.error) {
      setErrorMessage(resp.error);
      setLoading(false);
      return;
    }

    setErrorMessage('');
    setLoading(false);
    setEmail('');
    setPassword('');
    navigation.replace('BottomTabNavigator');
  };

  const onRegister = async () => {
    Keyboard.dismiss();
    setLoading(true);
    setIsFieldValid(true);
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      setErrorMessage('');
      setIsFieldValid(false);
      setLoading(false);
      return;
    }

    const resp = await register(name, email, password, roles.PLACE);

    if (!resp) {
      setLoading(false);
      setErrorMessage('No se pudo crear la cuenta');
      return;
    }

    if (resp.error) {
      setErrorMessage(resp.error);
      setLoading(false);
      return;
    }

    setErrorMessage('');
    setLoading(false);
    setName('');
    setEmail('');
    setPassword('');
    navigation.replace('BottomTabNavigator');
  };

  const onResetPassword = async () => {
    Keyboard.dismiss();
    setErrorMessage('');
    setLoading(true);
    if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      setIsFieldValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    const user = await updateUserPassword(email, password);

    if (!user) {
      setLoading(false);
      setErrorMessage('No se pudo restablecer la contraseña');
      return;
    }

    setLoading(false);
    setErrorMessage('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigation.goBack();
  };

  return {
    colors,
    confirmPassword,
    email,
    errorMessage,
    name,
    isFieldValid,
    loading,
    logoSource,
    password,
    goBack,
    goToLogin,
    goToRegister,
    goToResetPassword,
    onLogin,
    onRegister,
    onResetPassword,
    setConfirmPassword,
    setEmail,
    setIsFieldValid,
    setLoading,
    setName,
    setPassword,
  };
};
