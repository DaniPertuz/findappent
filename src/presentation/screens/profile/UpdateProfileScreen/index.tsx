import React, { useContext } from 'react';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import UpdateProfileBody from '../../../components/profile/ProfileEdit/UpdateProfileBody';
import UpdateProfileHeader from '../../../components/profile/ProfileEdit/UpdateProfileHeader';
import ProfileMainContainer from '../../../components/profile/ProfileView/ProfileMainContainer';
import { ThemeContext } from '../../../theme/ThemeContext';

const UpdateProfileScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <ProfileMainContainer>
        <UpdateProfileHeader />
        <UpdateProfileBody />
      </ProfileMainContainer>
    </>
  );
};

export default UpdateProfileScreen;
