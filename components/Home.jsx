import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Home({navigation}) {

  let date = new Date();
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    // const day = week[date.getDay()];
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    //api key et url : http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=fc0b2a365b5012c84d8eeb72952effe2&lang=fr&units=metric

    const apiKey = 'fc0b2a365b5012c84d8eeb72952effe2';
    const ville = 'Paris';

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
      .then(response => response.json())
      .then(data => {
        setCity(data.name)
        setDesc(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)) 
        setTemp(data.main.temp.toFixed(0))
        setIcon(data.weather[0].icon)
      })
    });

    return (
        <LinearGradient style={styles.gradiant} colors={['#fe9a8b','#fd868c', '#f9748f','#f78ca0']}>
            <View style={styles.container}>
              <Text style={styles.time}>{fullDate}{"\n"}{city}</Text>
                <Image style={styles.image} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}/>
                <View>
                    <Text style={styles.intitule}>{desc}</Text>
                    <Text style={styles.degre}>{temp}°C</Text>
                </View>
                <LinearGradient style={styles.btn} colors={['#29323c', '#485563']}>
                <Text style={styles.btnText} onPress={() => navigation.navigate('Previsions', {name: 'Previsions'})}>Voir les jours suivants</Text>
                <Text style={styles.btnIcon}>🌡️</Text>
                </LinearGradient>
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
  },
  btn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
  },
  btnText:{
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
  },
  btnIcon: {
    fontSize: 25,
  }

});


export default Home;