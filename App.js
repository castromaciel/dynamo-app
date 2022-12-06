import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Login, Dashboard, BenfitDetail, Register,
} from './src/screens';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Benefit Modal'
          component={BenfitDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
