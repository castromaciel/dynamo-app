import React from 'react';
import { View } from 'react-native';
import MapIframe from './src/components/MapIframe/MapIframe';
import Navbar from './src/components/Navbar/Navbar';
import { Carousel } from './src/components/Carousel';

const App = () => {
  return (
    <View>
      <Navbar />
      <Carousel />
      <MapIframe />
    </View>
  );
};

export default App;
