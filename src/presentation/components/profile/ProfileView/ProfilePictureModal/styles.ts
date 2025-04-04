import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    gap: 10,
    padding: 10,
    width: '100%',
  },
  imagePickerButton: {
    paddingHorizontal: 20,
  },
  imagePickerIcon: {
    height: 40,
    width: 40,
  },
  imagePickerContainer: {
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
  },
  userPhoto: {
    borderRadius: 20,
    height: 450,
    width: 350,
  },
});
