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
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Accueil',
            headerStyle: headerHome,
          }}
        />
        <Stack.Screen name="Previsions" component={Previsions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerHome = {
  backgroundColor: '#fe9a8b',

}
