import React from 'react';
import { ScrollView } from 'react-native';
import Navbar from '../components/Navbar/Navbar';

const DefaultScreen = ({ children, style }) => {
  return (
    <ScrollView style={style}>
      <Navbar />
      {children}
    </ScrollView>
  );
};

export default DefaultScreen;
