import { useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { roles } from '../../interfaces/app.interface';
import { useAuthStore } from '../../store/authStore';
import { RootStackParams } from '../navigation/MainNavigator';
import { ThemeContext } from '../theme/ThemeContext';

export const useAuthData = () => {
  const [isFieldValid, setIsFieldValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { colors, currentTheme } = useContext(ThemeContext);
  const login = useAuthStore(state => state.login);
  const register = useAuthStore(state => state.register);
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
    setLoading(true);
    Keyboard.dismiss();
    if (email.length === 0 || password.length === 0) {
      setIsFieldValid(false);
      return;
    }

    const resp = await login(email, password);

    if (!resp) {
      setLoading(false);
      return;
    }

    if (resp.error) {
      setLoading(false);
      return;
    }

    setLoading(false);
    navigation.replace('BottomTabNavigator');
  };

  const onRegister = async () => {
    setLoading(true);
    Keyboard.dismiss();
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      setIsFieldValid(false);
      return;
    }

    const resp = await register(name, email, password, roles.PLACE);

    if (!resp) {
      setLoading(false);
      return;
    }

    if (resp.error) {
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  const onResetPassword = async () => {
    setLoading(true);
    Keyboard.dismiss();
    if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      setIsFieldValid(false);
      return;
    }
  };

  return {
    colors,
    confirmPassword,
    email,
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
