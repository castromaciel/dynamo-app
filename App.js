import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './appStyles';
import Navbar from './src/components/Navbar/Navbar';

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
};

export default App;
