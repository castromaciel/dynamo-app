import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
