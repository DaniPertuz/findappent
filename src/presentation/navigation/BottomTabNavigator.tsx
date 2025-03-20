import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabItem } from '../components/navigation/TabItem';
import { DashboardScreen, SubscriptionScreen } from '../screens';
import { ProfileNavigator } from './';
import { ThemeContext } from '../theme/ThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => TabItem(focused, route.name),
        tabBarStyle: { ...styles.bottomTabStyle, backgroundColor: colors.white },
        headerShown: false,
      })}
    >
      <Tab.Screen name={'Inicio'} options={{ tabBarLabel: '' }} component={DashboardScreen} />
      <Tab.Screen name={'Suscripción'} options={{ tabBarLabel: '' }} component={SubscriptionScreen} />
      <Tab.Screen name={'Perfil'} options={{ tabBarLabel: '' }} component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: { height: 65, paddingTop: 15 },
});

export default BottomTabNavigator;
