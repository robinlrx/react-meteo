import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Jour from './Jour';

function Previsions(props) {

  // const apiKey = 'fc0b2a365b5012c84d8eeb72952effe2'
  // const apiKey = 'adbb3ec5f92d77607ff77f1946193b0f';
  const apiKey = '886268d885e2614466725dcf8b9589c5';

  const ville = 'Villiers-sur-Marne';

  const [meteo, setMeteo] = useState('');
 
  useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
    .then(response => response.json())
    .then(meteo => {
      setMeteo(meteo);
    })
  });

    return (
      <ScrollView style={styles.container}>
        {/* <ScrollView> */}
          <LinearGradient style={styles.gradiant} colors={['#16d9e3','#30c7ec','#46aef7']}>
            <View style={styles.containerInfo}>
            <FlatList
              data={meteo.list}
              renderItem={({item}) => {
                return (
                  <Jour item={item}/>
                )}
              }
              keyExtractor={item => item.dt}
            />
            </View>
          </LinearGradient>
        {/* </ScrollView> */}
      </ScrollView>
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
    },
    containerInfo: {
      flex: 1,
      marginTop: 30,
      // justifyContent: 'space-around',
    },
  });
  

export default Previsions;