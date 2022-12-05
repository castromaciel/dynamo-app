import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 300,
    height: 300,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
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
