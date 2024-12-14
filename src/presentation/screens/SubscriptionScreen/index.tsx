import React, { useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import SubscriptionHeader from '../../components/subscriptions/SubscriptionHeader';
import SubscriptionPlansList from '../../components/subscriptions/SubscriptionPlansList';
import StatusBarComponent from '../../components/ui/StatusBarComponent';
import { ThemeContext } from '../../theme/ThemeContext';

const { height } = Dimensions.get('window');

const SubscriptionScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <SubscriptionHeader />
      <SubscriptionPlansList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: height * 0.08,
  },
});

export default SubscriptionScreen;
