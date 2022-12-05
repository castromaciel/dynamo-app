import React from 'react';
import { styles } from './dashboardStyle';
import { Carousel, MapIframe } from '../../components';
import { DefaultScreen } from '../../layout';

const Dashboard = () => {
  return (
    <DefaultScreen style={styles.container}>
      <Carousel />
      <MapIframe />
    </DefaultScreen>
  );
};

export default Dashboard;
