import React from 'react';
import { View } from 'react-native';
import { styles } from './appStyles';
import MapIframe from './src/components/MapIframe/MapIframe';
import Navbar from './src/components/Navbar/Navbar';

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <MapIframe />
    </View>
  );
};

export default App;
