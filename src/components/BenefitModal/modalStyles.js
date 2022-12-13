import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    width: '80%',
    height: '28%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCode: {
    backgroundColor: 'rgba(10,10,10,0.3)',
    paddingVertical: 7,
    paddingHorizontal: 15,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  modalCloseButton: {
    backgroundColor: '#000',
    padding: 10,
    textAlign: 'right',
    borderRadius: 10,
  },
});
