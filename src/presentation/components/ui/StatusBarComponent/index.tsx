import React, { FC } from 'react';
import { Platform, StatusBar, View } from 'react-native';

interface Props {
  color: string;
  theme: 'dark-content' | 'light-content';
}

const StatusBarComponent: FC<Props> = ({ color, theme }) => {

  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

  return (
    <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: color }}>
      <StatusBar translucent backgroundColor={color} barStyle={theme} />
    </View>
  );
};

export default StatusBarComponent;
