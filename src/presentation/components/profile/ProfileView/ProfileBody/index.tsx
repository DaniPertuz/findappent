import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuthStore } from '../../../../../store/authStore';
import { usePlaceStore } from '../../../../../store/placeStore';
import { placeCategory } from '../../../../../utils/categories';
import { getIconUrl } from '../../../../../utils/icon-url';
import ProfileDescription from '../ProfileDescription';
import ProfileDetail from '../ProfileDetail';
import ProfileLogoutButton from '../ProfileLogoutButton';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileBody: FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const user = useAuthStore(state => state.authResponse.user);
  const place = usePlaceStore(state => state.place);

  return (
    <View style={styles.container}>
      <ProfileDescription description={place?.description || ''} />
      <ProfileDetail
        label={'Nombre de la empresa'}
        icon={getIconUrl('users', currentTheme, true)}
        text={user?.name ?? ''}
      />
      <ProfileDetail
        label={'Categoría'}
        icon={getIconUrl(placeCategory(place!) || 'others', currentTheme, true)}
        text={place?.category ?? 'Sin categoría'}
      />
      <ProfileDetail
        label={'Correo corporativo'}
        icon={getIconUrl('envelope', currentTheme, true)}
        text={user?.email ?? ''}
      />
      <ProfileLogoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 25, paddingTop: 20 },
});

export default ProfileBody;
