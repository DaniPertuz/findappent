import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Caption1 } from '../../../../ui';
import { ThemeContext } from '../../../../../theme/ThemeContext';

interface Props {
  customized: boolean;
  onClick: () => void;
}

const SchedulerCheckBox: FC<Props> = ({ customized, onClick }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.checkBox}
        checkBoxColor={colors.mainText}
        isChecked={customized}
        onClick={onClick}
      />
      <Caption1 customColor={colors.mainText}>Personalizado</Caption1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  checkBox: { justifyContent: 'center' },
});

export default SchedulerCheckBox;
