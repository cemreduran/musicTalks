/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import RoomList from './pages/RoomList/RoomList';
import Room from './pages/Room/Room';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="RoomListPage"
            component={RoomList}
            options={{
              headerShown: false,
              title: 'Grup Odaları',
            }}
          />
        )}
        <Stack.Screen
          name="RoomPage"
          component={Room}
          options={{
            headerShown: false,
            title: 'Grup Odaları',
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
