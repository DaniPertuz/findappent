import React, { FC, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ProfileLabelContainer from '../ProfileLabelContainer';
import { BodySmall, Caption2 } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  label: string;
  icon: string;
  text: string;
}

const ProfileDetail: FC<Props> = ({ label, icon, text }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ProfileLabelContainer>
      <Caption2 customColor={colors.gray}>{label}</Caption2>
      <View style={styles.container}>
        <Image source={{ uri: icon }} style={styles.detailIcon} />
        <BodySmall customColor={colors.mainText}>{text}</BodySmall>
      </View>
    </ProfileLabelContainer>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', gap: 10 },
  detailIcon: { height: 25, width: 25 },
});

export default ProfileDetail;
