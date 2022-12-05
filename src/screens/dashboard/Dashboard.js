import React from 'react';
import { View } from 'react-native';
import { styles } from './dashboardStyle';
import { Navbar, Carousel, MapIframe } from '../../components/index';

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
