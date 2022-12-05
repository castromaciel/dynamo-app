import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './dashboardStyle';
import { Navbar, Carousel, MapIframe } from '../../components';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <Carousel />
      <MapIframe />
    </ScrollView>
  );
};

export default Dashboard;
