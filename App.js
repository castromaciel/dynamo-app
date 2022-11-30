import React from 'react';
import { View } from 'react-native';
import { styles } from './appStyles';
import MapIframe from './src/components/MapIframe/MapIframe';

const App = () => {
  return (
    <View style={styles.container}>
      <MapIframe />
    </View>
  );
};

export default App;
