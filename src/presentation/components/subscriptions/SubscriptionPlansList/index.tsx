import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SubscriptionPlastListItem from '../SubscriptionPlansListItem';
import { deviceHeight } from '../../../../utils/dimensions';

const SubscriptionPlansList: FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} style={styles.container}>
      <SubscriptionPlastListItem
        level={'3'}
        levelText={'Premium'}
        price={20}
        details={[
          'Alta prioridad en resultado de búsquedas',
          'Subir fotos ilimitadas',
          'Subir hasta 10 videos promocionales',
          'Registrar más canales de comunicación del lugar (Instagram & WhatsApp).',
        ]}
      />
      <SubscriptionPlastListItem
        level={'2'}
        levelText={'Regular'}
        price={15}
        details={[
          'Media prioridad en resultado de búsquedas',
          'Subir hasta 2 fotos del lugar',
          'Subir hasta 2 videos promocionales',
          'Registrar más canales de comunicación del lugar (Instagram & WhatsApp).',
        ]}
      />
      <SubscriptionPlastListItem
        level={'1'}
        levelText={'Básico'}
        price={0}
        details={[
          'Baja prioridad en resultado de búsquedas',
          'Subir 1 foto del lugar',
          'Subir 1 video promocional',
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
    paddingBottom: deviceHeight * 0.085,
  },
});

export default SubscriptionPlansList;
