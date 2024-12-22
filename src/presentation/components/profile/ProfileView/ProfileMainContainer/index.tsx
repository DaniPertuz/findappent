import React, { FC, PropsWithChildren, useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileMainContainer: FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      {children}
    </View>
  );
};

export default ProfileMainContainer;
