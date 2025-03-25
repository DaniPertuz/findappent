import React, { FC, useContext } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import ProfileMainContainer from '../../../components/profile/ProfileView/ProfileMainContainer';
import UpdateProfileBody from '../../../components/profile/ProfileEdit/UpdateProfileBody';
import UpdateProfileHeader from '../../../components/profile/ProfileEdit/UpdateProfileHeader';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import { RootStackParams } from '../../../navigation/MainNavigator';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'UpdateProfileScreen'> { }

const UpdateProfileScreen: FC<Props> = ({ route }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const { place } = route.params;

  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <ProfileMainContainer>
        <UpdateProfileHeader />
        <UpdateProfileBody place={place} />
      </ProfileMainContainer>
    </>
  );
};

export default UpdateProfileScreen;
