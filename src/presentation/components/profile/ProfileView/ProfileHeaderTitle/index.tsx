import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { BodySmall } from '../../../ui/BodySmall';
import { H3 } from '../../../ui/H3';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { styles } from './styles';
import AddEditButton from '../../../ui/AddEditButton';

interface Props {
  name: string;
  email: string;
}

const ProfileHeaderTitle: FC<Props> = ({ name, email }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <H3 customColor={colors.mainText}>{name}</H3>
        </View>
        <AddEditButton edit />
      </View>
      <BodySmall customColor={colors.gray}>{email}</BodySmall>
    </>
  );
};

export default ProfileHeaderTitle;
