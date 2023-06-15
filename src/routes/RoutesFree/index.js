import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import Home from '../../screens/Home';

const Stack = createStackNavigator();

const RoutesFree = () => {

  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
              backgroundColor: '#363636',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default RoutesFree;
