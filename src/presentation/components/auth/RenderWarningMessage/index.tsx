import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import WarningMessage from '../WarningMessage';

const RenderWarningMessage: FC<{ errorMessage: string; }> = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <WarningMessage text={errorMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start' },
});

export default RenderWarningMessage;
