import React, { useContext } from 'react';
import { View } from 'react-native';
import StatusBarComponent from '../../../components/ui/StatusBarComponent';
import ProfileHeader from '../../../components/profile/ProfileHeader';
import ProfileBody from '../../../components/profile/ProfileBody';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from '../styles';

const ProfileScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={[{ backgroundColor: colors.background }, styles.container]}>
        <ProfileHeader />
        <ProfileBody />
      </View>
    </>
  );
};

export default ProfileScreen;
