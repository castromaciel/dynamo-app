import React from 'react';
import { View } from 'react-native';
import { MapIframe } from './src/components/MapIframe';
import { Navbar } from './src/components/Navbar';
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
