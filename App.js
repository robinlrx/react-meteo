import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Previsions from './components/Previsions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="float" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Accueil',
            headerStyle: headerHome,
          }}
        />
        <Stack.Screen name="Previsions" component={Previsions}
          options={{
            title: "Prévisions de la semaine",
            headerStyle: headerPrevision,
            headerTintColor: '#fff',
          }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerHome = {
  backgroundColor: '#fe9a8b',
}

const headerPrevision = {
  backgroundColor: '#16d9e3',
}
