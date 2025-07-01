import * as RNLocalize from 'react-native-localize';

export const getCurrencyByCountry = () => {
  const country = RNLocalize.getCountry();
  const countryToCurrency: Record<string, { currency: string; rate: number; }> = {
    CO: { currency: 'cop', rate: 4000 },
    // MX: { currency: 'mxn', rate: 17 },
    // AR: { currency: 'ars', rate: 900 },
    // PE: { currency: 'pen', rate: 3.7 },
    // CL: { currency: 'clp', rate: 900 },
    // BR: { currency: 'brl', rate: 5 },
  };

  return countryToCurrency[country] || { currency: 'usd', rate: 1 };
};
