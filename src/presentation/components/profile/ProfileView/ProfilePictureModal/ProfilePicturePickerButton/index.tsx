import React, { FC, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { ButtonComponent } from '../../../../ui';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';

interface Props {
  icon: string;
  loading?: boolean;
  onPress: () => void;
}

const ProfilePicturePickerButton: FC<Props> = ({ icon, loading, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ButtonComponent
      customStyle={[styles.button, { backgroundColor: `rgba(255,255,255,0.${currentTheme === 'light' ? '5' : '2'})` }]}
      disabled={loading}
      loading={loading}
      onPress={onPress}
    >
      <Image
        src={getIconUrl(icon, currentTheme, true)}
        style={styles.imagePickerIcon}
      />
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
  },
  imagePickerIcon: {
    height: 40,
    width: 40,
  },
});

export default ProfilePicturePickerButton;
