import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 320,
  },
  content: {
    marginVertical: 16,
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    height: 50,
    alignItems: 'center',
  },
  footerButton: {
    fontSize: 20,
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
