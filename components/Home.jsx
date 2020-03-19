import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Home(props) {
    return (
        <LinearGradient style={styles.gradiant} colors={['#FBAB7E', '#F7CE68']}>
            <View style={styles.container}>
                <Text style={styles.time}>Mardi 11 juillet 2020 {"\n"} 00:00</Text>
                <Image style={styles.image} source={require('../images/sun.png')}/>
                <View>
                    <Text style={styles.intitule}>Ensoleillé</Text>
                    <Text style={styles.degre}>10°</Text>
                </View>
            </View>
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
  gradiant: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-around',
  },
  time:{
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'normal',
    lineHeight: 35,
    },
  image:{
    width: 270,
    height: 250,
  },
  intitule:{
      marginTop: 10,
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 'normal',
  },
  degre:{
      marginTop: 10,
      color: '#ffffff',
      fontSize: 55,
  }

});


export default Home;