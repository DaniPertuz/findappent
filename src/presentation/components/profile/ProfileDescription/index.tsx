import React, { FC, useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BodySmall } from '../../ui/BodySmall';
import { Caption2 } from '../../ui/Caption2';
import ProfileLabelContainer from '../ProfileLabelContainer';
import { ThemeContext } from '../../../theme/ThemeContext';

const ProfileDescription: FC<{ description: string; }> = ({ description }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ProfileLabelContainer>
      <Caption2 customColor={colors.gray}>Descripción</Caption2>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <BodySmall customColor={colors.mainText}>{description}</BodySmall>
      </ScrollView>
    </ProfileLabelContainer>
  );
};

const styles = StyleSheet.create({
  container: { maxHeight: 100 },
});

export default ProfileDescription;
