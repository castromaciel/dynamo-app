import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'absolute',
    width: 200,
    backgroundColor: '#fff',
    top: 43,
    right: 2,
    borderRadius: 5,
    padding: 8,
    zIndex: 10,
    elevation: 10,
    borderWidth: 0.5,
    borderColor: '#dbdbdb',
  },
  separator: {
    flex: 1,
    marginVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
});
