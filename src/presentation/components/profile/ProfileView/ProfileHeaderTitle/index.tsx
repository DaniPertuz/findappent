import React, { FC, useCallback, useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IPlace } from '../../../../../core/entities';
import { RootStackParams } from '../../../../navigation/MainNavigator';
import { AddEditButton, BodySmall, H3 } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  name: string;
  email: string;
}

const ProfileHeaderTitle: FC<Props> = ({ name, email }) => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const handleEditPress = useCallback(() => {
    const defaultPlace: IPlace = {
      name: 'Sample Name',
      description: 'Sample Description',
      category: 'Sample Category',
      address: 'Sample Address',
      city: 'Sample City',
      cityState: 'Sample City State',
      country: 'Sample Country',
      coords: { latitude: 0, longitude: 0 },
      email: 'mail@test.com',
      phone: 3000000,
      pics: [],
      schedule: [],
      status: true,
    };
    navigation.navigate('UpdateProfileScreen', { place: defaultPlace });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <H3 customColor={colors.mainText}>{name}</H3>
        </View>
        <AddEditButton edit onPress={handleEditPress} />
      </View>
      <BodySmall customColor={colors.gray}>{email}</BodySmall>
    </>
  );
};

export default ProfileHeaderTitle;
