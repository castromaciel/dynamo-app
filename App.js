import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {
  Login, Dashboard, BenfitDetail, Register,
} from './src/screens';
import { store } from './store';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
