import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 10,
  },
  createAccountContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 20,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
  },
  image: {
    height: 107,
    width: 239,
  },
  imageText: {
    position: 'absolute',
    marginTop: 70,
  },
  keyboardContainer: {
    flex: 1,
  },
  labelsContainer: {
    alignSelf: 'stretch',
    gap: 5,
  },
  loginButtonContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
