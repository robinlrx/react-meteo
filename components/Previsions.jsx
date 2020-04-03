import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Jour from './Jour';

function Previsions(props) {

  const apiKey = 'fc0b2a365b5012c84d8eeb72952effe2'
  // const apiKey = 'adbb3ec5f92d77607ff77f1946193b0f';

  const ville = 'Villiers-sur-Marne';

  const [meteo, setMeteo] = useState('');
 
  useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
    .then(response => response.json())
    .then(meteo => {
      setMeteo(meteo)
    })
  });

    return (
      <ScrollView style={styles.container}>
          <LinearGradient style={styles.gradiant} colors={['#209ebb','#00273a']}>
            <View style={styles.containerInfo}>
              {/* Flatlist va permettre d'afficher  une liste (composant Jour) qui contient les prévisions pour les 5 jours suivantes*/}
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
    },
  });
  

export default Previsions;