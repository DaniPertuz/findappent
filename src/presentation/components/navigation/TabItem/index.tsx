import React from 'react';
import BottomTabItem from '../BottomTabItem';

export const TabItem = (focused: boolean, routeName: string) => {
  switch (routeName) {
    case 'Inicio':
      return <BottomTabItem focused={focused} iconFocused={'house-focused'} iconNotFocused={'house'} text={'Inicio'} />;
    case 'Suscripción':
      return <BottomTabItem focused={focused} iconFocused={'trophy-focused'} iconNotFocused={'trophy'} text={'Suscripción'} />;
    case 'Perfil':
      return <BottomTabItem focused={focused} iconFocused={'user-circle-focused'} iconNotFocused={'user-circle'} text={'Perfil'} />;
    default:
      return null;
  }
};
