import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../navigation/MainNavigator';
import BackButton from '../../../ui/BackButton';
import UpdateProfileHeaderContainer from '../UpdateProfileHeaderContainer';
import UpdateProfileHeaderTitle from '../UpdateProfileHeaderTitle';

const UpdateProfileHeader = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <UpdateProfileHeaderContainer>
      <BackButton onPress={() => navigation.goBack()} />
      <UpdateProfileHeaderTitle />
    </UpdateProfileHeaderContainer>
  );
};

export default UpdateProfileHeader;
