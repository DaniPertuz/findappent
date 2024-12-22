import React, { FC, useContext } from 'react';
import { View, Pressable, Image } from 'react-native';
import { CLOUDINARY_URL } from '../../../../api/cloudinaryIconsAPI';
import { BodySmall } from '../../ui/BodySmall';
import { H3 } from '../../ui/H3';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  name: string;
  email: string;
}

const ProfileHeaderTitle: FC<Props> = ({ name, email }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <H3 customColor={colors.mainText}>{name}</H3>
        </View>
        <Pressable>
          <Image
            source={{ uri: `${CLOUDINARY_URL}/${currentTheme === 'light' ? 'edit' : 'edit_white'}` }}
            style={styles.editIcon}
          />
        </Pressable>
      </View>
      <BodySmall customColor={colors.gray}>{email}</BodySmall>
    </>
  );
};

export default ProfileHeaderTitle;
