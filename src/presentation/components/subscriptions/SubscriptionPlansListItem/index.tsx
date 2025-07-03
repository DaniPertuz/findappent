import React, { FC, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import findAPI from '../../../../config/api/findapp.api';
import SubscriptionButton from '../SubscriptionButton';
import SubscriptionPaymentModal from '../SubscriptionPaymentModal';
import SubscriptionPlanItemHeader from '../SubscriptionPlanItemHeader';
import SubscriptionPlanItemBody from '../SubscriptionPlanItemBody';
import SubscriptionPlanDetails from '../SubscriptionPlanDetails';
import SubscriptionPlanPrice from '../SubscriptionPlanPrice';
import { SubscriptionUrl } from '../../../../interfaces/app.interface';
import { getCurrencyByCountry } from '../../../../utils/getCurrencyByCountry';
import { usePlaceData } from '../../../hooks/usePlaceData';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  level: string;
  levelText: string;
  price: number;
  details: string[];
}

const SubscriptionPlastListItem: FC<Props> = ({ level, levelText, price, details }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { colors, currentTheme } = useContext(ThemeContext);
  const { place, fetchPlaceData } = usePlaceData();
  const borderBackground = {
    backgroundColor: colors.white,
    borderColor: currentTheme === 'dark' ? colors.brandWhite : undefined,
    borderWidth: currentTheme === 'dark' ? 1 : 0,
  };
  const { currency, rate } = getCurrencyByCountry();
  const localPrice = Math.round(price * rate);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const response = await findAPI.post<SubscriptionUrl>('/payments/create-payment-session', {
        currency,
        placeId: place?._id,
        plan: +level,
        items: [
          {
            name: levelText,
            price: localPrice,
            quantity: 1,
          },
        ],
      });

      const sessionUrl = response.url;
      if (sessionUrl) {
        setCheckoutUrl(sessionUrl);
      } else {
        console.warn('No URL in session response');
      }
    } catch (error) {
      console.error('Error creating checkout session', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelSubscribe = async () => {
    try {
      setLoading(true);
      await findAPI.post('/payments/cancel-subscription', {
        placeId: place?._id,
      });
      handlePaymentSuccess();
    } catch (error) {
      console.error('Error creating checkout session', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async () => {
    await fetchPlaceData();
  };

  const closeModal = () => setCheckoutUrl(null);

  return (
    <View style={[styles.container, borderBackground]}>
      <SubscriptionPlanItemHeader level={level} text={levelText} />
      <SubscriptionPlanItemBody>
        <SubscriptionPlanPrice price={localPrice} currency={currency.toUpperCase()} />
        <SubscriptionPlanDetails details={details} />
        <SubscriptionButton loading={loading} text={`${place?.premium?.toString()}` === level ? 'Suscripción actual' : 'Suscribirme'} onPress={level === '1' ? handleCancelSubscribe : handleSubscribe} />
      </SubscriptionPlanItemBody>
      {level !== '1' && <SubscriptionPaymentModal checkoutUrl={checkoutUrl || ''} closeModal={closeModal} onPaymentSuccess={handlePaymentSuccess} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
  },
});

export default SubscriptionPlastListItem;
