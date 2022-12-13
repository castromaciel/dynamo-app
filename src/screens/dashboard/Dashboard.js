import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { styles } from './dashboardStyle';
import { Carousel, MapIframe } from '../../components';
import { DefaultScreen } from '../../layout';

const Dashboard = () => {
  useEffect(() => {
    const backAction = () => { return true; };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <DefaultScreen style={styles.container}>
      <Carousel />
      <MapIframe />
    </DefaultScreen>
  );
};

export default Dashboard;
