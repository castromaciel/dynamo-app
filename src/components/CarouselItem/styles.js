import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
  image: {
    padding: 12,
    backgroundColor: '#fff',
    width,
    height: 250,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'end',
    height: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '0.6',
  },
  footerButton: {
    fontSize: 18,
    fontWeight: '0.6',
    color: '#000',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
