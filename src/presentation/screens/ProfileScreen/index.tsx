import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import StatusBarComponent from '../../components/ui/StatusBarComponent';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileBody from '../../components/profile/ProfileBody';
import { ThemeContext } from '../../theme/ThemeContext';

const ProfileScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={[{ backgroundColor: colors.white }, styles.container]}>
        <ProfileHeader />
        <ProfileBody />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
