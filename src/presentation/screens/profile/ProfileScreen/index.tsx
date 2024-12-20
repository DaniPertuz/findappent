import React, { useContext } from 'react';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import ProfileBody from '../../../components/profile/ProfileBody';
import ProfileHeader from '../../../components/profile/ProfileHeader';
import ProfileMainContainer from '../../../components/profile/ProfileMainContainer';
import { ThemeContext } from '../../../theme/ThemeContext';

const ProfileScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <ProfileMainContainer>
        <ProfileHeader />
        <ProfileBody />
      </ProfileMainContainer>
    </>
  );
};

export default ProfileScreen;
