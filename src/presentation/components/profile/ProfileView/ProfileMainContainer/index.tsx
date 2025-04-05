import React, { FC, PropsWithChildren, useContext } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileMainContainer: FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ScrollView contentContainerStyle={[{ backgroundColor: colors.background }, styles.container]} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default ProfileMainContainer;
