import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  productDetailsContainer: {
    flexDirection: 'row',
  },
  productImageContainer: {
    flex: 1,
  },
  productImageStyle: {
    borderRadius: 8,
    height: 70,
    width: 70,
  },
  productDetailsButtonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  productDetailsNameContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  productDetailsButtonStyle: {
    backgroundColor: '#207CFD',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
});
