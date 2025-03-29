import React, { FC, useContext } from 'react';
import { Image, View } from 'react-native';
import { useAuthStore } from '../../../../store/authStore';
import { getIconUrl } from '../../../../utils/icon-url';
import { Subheadline, BodySmall, Footnote } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

const DashboardHeader: FC = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const user = useAuthStore(state => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Subheadline customColor={colors.mainText}>{'Bienvenid@'}</Subheadline>
        <BodySmall customColor={colors.mainText}>{user?.name ?? 'Negocio'}</BodySmall>
        <Footnote customColor={colors.mainText}>Nivel</Footnote>
      </View>
      <Image source={{ uri: user?.photo ?? getIconUrl('fa_blue', currentTheme, false) }} style={styles.mainPhoto} />
    </View>
  );
};

export default DashboardHeader;
