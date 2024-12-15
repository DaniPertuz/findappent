import React, { FC } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import SubscriptionPlastListItem from '../SubscriptionPlansListItem';

const { height } = Dimensions.get('window');

const SubscriptionPlansList: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={styles.container}>
      <SubscriptionPlastListItem
        level={'3'}
        levelText={'Premium'}
        price={'$ 20.000'}
        details={[
          'Alta prioridad en resultado de búsquedas',
          'Subir fotos ilimitadas',
          'Registrar más canales de comunicación del lugar (Instagram & WhatsApp).',
        ]}
      />
      <SubscriptionPlastListItem
        level={'2'}
        levelText={'Regular'}
        price={'$ 15.000'}
        details={[
          'Media prioridad en resultado de búsquedas',
          'Subir hasta 2 fotos del lugar',
          'Registrar más canales de comunicación del lugar (Instagram & WhatsApp).',
        ]}
      />
      <SubscriptionPlastListItem
        level={'1'}
        levelText={'Básico'}
        price={'$ 10.000'}
        details={[
          'Baja prioridad en resultado de búsquedas',
          'Subir 1 foto del lugar',
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  contentContainer: {
    gap: 16,
    paddingBottom: height * 0.085,
  },
});

export default SubscriptionPlansList;
