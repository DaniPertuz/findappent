import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { MainNavigator } from './';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'MainScreen'} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default Navigation;
