import React, { FC, PropsWithChildren, useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const ProfileMainContainer: FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      {children}
    </View>
  );
};

export default ProfileMainContainer;
