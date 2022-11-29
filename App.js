import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Dashboard } from './src/screens';
import image from './assets/img/logoRolling.png';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: 'Dynamo App',
            headerStyle: {
              backgroundColor: '#D9D9D9',
            },
          }}
        />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            headerTitleAlign: 'center',
            headerBackImageSource: `${image}`,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
