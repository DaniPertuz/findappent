import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { useAuthStore } from '../../../../store/authStore';
import ProfilePicture from '../../profile/ProfileView/ProfilePicture';
import { Subheadline, BodySmall, Footnote } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const DashboardHeader: FC = () => {
  const { colors } = useContext(ThemeContext);
  const user = useAuthStore(state => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Subheadline customColor={colors.mainText}>{'Bienvenid@'}</Subheadline>
        <BodySmall customColor={colors.mainText}>{user?.name ?? 'Negocio'}</BodySmall>
        <Footnote customColor={colors.mainText}>Nivel</Footnote>
      </View>
      <ProfilePicture styles={styles.mainPhoto} />
    </View>
  );
};

export default DashboardHeader;
