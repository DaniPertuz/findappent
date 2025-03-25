import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { StatusBarComponent } from '../../components/ui';
import { ThemeContext } from '../../theme/ThemeContext';

const LoadingScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <ActivityIndicator size={50} color={colors.mainText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingScreen;
