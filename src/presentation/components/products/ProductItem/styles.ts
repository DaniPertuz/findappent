import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 20,
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
    height: 42,
    width: 42,
  },
  productDetailsButtonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  productDetailsNameContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingEnd: 10,
  },
  productDetailsButtonStyle: {
    backgroundColor: '#207CFD',
    borderRadius: 4,
    justifyContent: 'center',
    padding: 5,
  },
});
