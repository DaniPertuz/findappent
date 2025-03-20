import React, { FC, useContext } from 'react';
import { Image, View } from 'react-native';
import { CLOUDINARY_URL } from '@env';
import { Subheadline, BodySmall, Footnote } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const DashboardHeader: FC<Props> = ({ title, subtitle }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Subheadline customColor={colors.mainText}>{title}</Subheadline>
        <BodySmall customColor={colors.mainText}>{subtitle}</BodySmall>
        <Footnote customColor={colors.mainText}>Nivel</Footnote>
      </View>
      <Image source={{ uri: `${CLOUDINARY_URL}/fa_blue` }} style={styles.mainPhoto} />
    </View>
  );
};

export default DashboardHeader;
