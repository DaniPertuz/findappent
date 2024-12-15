import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SubscriptionHeader from '../../components/subscriptions/SubscriptionHeader';
import SubscriptionPlansList from '../../components/subscriptions/SubscriptionPlansList';
import StatusBarComponent from '../../components/ui/StatusBarComponent';
import { ThemeContext } from '../../theme/ThemeContext';

const SubscriptionScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <SubscriptionHeader />
      <SubscriptionPlansList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SubscriptionScreen;
