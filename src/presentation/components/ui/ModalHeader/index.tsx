import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ProductImage } from '../../../../core/entities';
import { ModalProps } from '../../../../interfaces/modal-props.interface';
import ModalHideButton from '../../dashboard/DashboardReviewsModal/ModalHideButton';
import ModalTitle from '../../dashboard/DashboardReviewsModal/ModalTitle';
import Footnote from '../Footnote';
import { ThemeContext } from '../../../theme/ThemeContext';

const ModalHeader: FC<ModalProps & {
  main?: boolean,
  imgs?: ProductImage[],
  onPress: () => void,
  onSetMain?: (uri: string) => void;
}> = ({ closeIcon, main, title, uri, onPress, onSetMain }) => {
  const { colors } = useContext(ThemeContext);

  const handlePress = () => {
    if (!main && uri) {
      onSetMain!(uri);
    }
    onPress();
  };

  return (
    <View style={[{ backgroundColor: colors.background }, styles.modalContainer]}>
      <ModalHideButton closeIcon={closeIcon!} onPress={onPress!} />
      {title?.length !== 0 && <ModalTitle title={title!} />}
      <Pressable onPress={handlePress} disabled={main}>
        <Footnote customColor={colors.mainText}>
          {main ? 'Imagen principal' : 'Establecer como principal'}
        </Footnote>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default ModalHeader;
