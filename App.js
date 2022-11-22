import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './appStyles';
import { Login } from './screens/login';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Dynamo App</Text>
      <Login />
    </View>
  );
};

export default App;
