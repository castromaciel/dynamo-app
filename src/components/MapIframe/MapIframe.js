import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../../../appStyles';

const MapIframe = () => {
  const rollingUbication = { latitude: -26.836643443304524, longitude: -65.2071910731983 };
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'left', fontWeight: 'bold' }}>Encontranos</Text>
      <View style={styles.mapContainer}>
        <MapView style={{
          width: '98%', height: '98%', paddind: 10,
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
    </View >
  );
};

export default MapIframe;
