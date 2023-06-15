import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RoutesAuth from './src/routes/RoutesAuth';
import RoutesFree from './src/routes/RoutesFree';
import {AuthProvider} from './src/contexts/auth';
import {FreeProvider} from './src/contexts/free';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      {user ? (
        <AuthProvider user={user} setUser={setUser}>
          <RoutesAuth />
        </AuthProvider>
      ) : (
        <FreeProvider user={user} setUser={setUser}>
          <RoutesFree />
        </FreeProvider>
      )}
    </NavigationContainer>
  );
}
