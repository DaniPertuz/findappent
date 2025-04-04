import React, { useContext } from 'react';
import ProfileBody from '../../../components/profile/ProfileView/ProfileBody';
import ProfileHeader from '../../../components/profile/ProfileView/ProfileHeader';
import ProfileMainContainer from '../../../components/profile/ProfileView/ProfileMainContainer';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import { useAuthStore } from '../../../../store/authStore';
import { ThemeContext } from '../../../theme/ThemeContext';

const ProfileScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const user = useAuthStore(state => state.authResponse.user);

  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <ProfileMainContainer>
        <ProfileHeader user={user} />
        <ProfileBody />
      </ProfileMainContainer>
    </>
  );
};

export default ProfileScreen;
