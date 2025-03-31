import React, { FC, useCallback, useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from '../../../../../store/authStore';
import { usePlaceStore } from '../../../../../store/placeStore';
import { RootStackParams } from '../../../../navigation/MainNavigator';
import { AddEditButton, BodySmall, H3 } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';

const ProfileHeaderTitle: FC = () => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const user = useAuthStore(state => state.authResponse.user);
  const place = usePlaceStore(state => state.place);

  const handleEditPress = useCallback(() => {
    navigation.navigate('UpdateProfileScreen', { place: place! });
  }, [navigation, place]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <H3 customColor={colors.mainText}>{user?.name}</H3>
        </View>
        <AddEditButton edit onPress={handleEditPress} />
      </View>
      <BodySmall customColor={colors.gray}>{user?.email}</BodySmall>
    </>
  );
};

export default ProfileHeaderTitle;
