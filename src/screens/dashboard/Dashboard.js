import React from 'react';
import { View } from 'react-native';
import { styles } from './dashboardStyle';
import MapIframe from '../../components/MapIframe/MapIframe';
import Navbar from '../../components/Navbar/Navbar';
import { Carousel } from '../../components/Carousel';

const Dashboard = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Carousel />
      <MapIframe />
    </View>
  );
};

export default Dashboard;
