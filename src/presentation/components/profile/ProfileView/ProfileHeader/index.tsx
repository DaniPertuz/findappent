import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import ProfileHeaderTitle from '../ProfileHeaderTitle';
import ProfilePictureModal from '../ProfilePictureModal';
import ThemeToggleButton from '../../../ui/theme/ThemeToggleButton';
import { IUser } from '../../../../../core/entities';

const ProfileHeader: FC<{ user: IUser | undefined; }> = ({ user }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ThemeToggleButton />
      <View style={styles.container}>
        <ProfilePicture photoUri={user?.photo!} styles={styles.picture} onPress={() => setModalVisible(true)} />
        <ProfileHeaderTitle />
      </View>
      <ProfilePictureModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  picture: {
    borderRadius: 50,
    height: 97,
    width: 97,
  },
});

export default ProfileHeader;
