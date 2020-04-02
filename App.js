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
    // pour avoir la barre de nav et permettre de naviguer entre les pages
    <NavigationContainer>
      <Stack.Navigator headerMode="float" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
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

// style la bare de navigation de Home.jsx et Prevision.jsx

const headerHome = {
  borderWidth: 0,
  shadowColor: 'transparent',
  height: 0,
}

const headerPrevision = {
  backgroundColor: '#209ebb',
}
