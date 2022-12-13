import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './mapStyles';

const MapIframe = () => {
  const rollingUbication = { latitude: -26.836643443304524, longitude: -65.2071910731983 };
  return (
    <View>
      <Text style={styles.title}>Encontranos</Text>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.mapContainer}>
          <MapView style={{
            width: '100%', height: '80%%', paddind: 10,
          }}
            initialRegion={{
              latitude: rollingUbication.latitude,
              longitude: rollingUbication.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
            }>
            <Marker draggable={false} coordinate={rollingUbication}></Marker>
          </MapView>
        </View>
      </View>
    </View >
  );
};

export default MapIframe;
