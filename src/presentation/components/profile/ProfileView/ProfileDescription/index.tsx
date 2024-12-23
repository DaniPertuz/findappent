import React, { FC, useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileLabelContainer from '../ProfileLabelContainer';
import { BodySmall, Caption2 } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ProfileDescription: FC<{ description: string; }> = ({ description }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ProfileLabelContainer>
      <Caption2 customColor={colors.gray}>Descripción</Caption2>
      <View style={[styles.container, { borderColor: colors.gray }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BodySmall customColor={colors.mainText}>{description}</BodySmall>
        </ScrollView>
      </View>
    </ProfileLabelContainer>
  );
};

const styles = StyleSheet.create({
  container: { borderRadius: 10, borderWidth: 1, maxHeight: 120, overflow: 'hidden', padding: 10 },
});

export default ProfileDescription;
