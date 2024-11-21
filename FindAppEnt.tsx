import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { ThemeContextProvider } from './src/presentation/theme/ThemeContext';

const FindAppEnt = () => {
  return (
    <ThemeContextProvider>
      <ThemedContent />
    </ThemeContextProvider>
  );
};

const ThemedContent = () => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.mainText }}>123</Text>
    </View>
  );
};

export default FindAppEnt;
