import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Home({navigation}) {

  //avoir la date du jour avec la fonction Date()
    const date = new Date();
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    //avoir l'heure
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

      useEffect(() => {
        setInterval(function heure(){
            let heure = new Date().getHours().toString().padStart(2, '0');
            setHours(heure);
        }, 600);
        setInterval(function minutes(){
            let min = new Date().getUTCMinutes().toString().padStart(2, '0');
            setMinutes(min);
        }, 100);
    });

    let horloge = `${hours}:${minutes}`;
  
    //api key et url : http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=fc0b2a365b5012c84d8eeb72952effe2&lang=fr&units=metric

    const apiKey = 'fc0b2a365b5012c84d8eeb72952effe2';
    // const apiKey = 'adbb3ec5f92d77607ff77f1946193b0f';
    const ville = 'Villiers-sur-Marne';

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
      .then(response => response.json())
      .then(data => {
        //pour avoir les informations voulu du JSON
        setCity(data.name)
        setDesc(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)) //charAt(0).toUpperCase() : avoir la 1er lettre en capital, .slice(1) : regrouper avec la lettre du début
        setTemp(data.main.temp.toFixed(0)) // toFixed(0) : mette la température en  valeur entière
        setIcon(data.weather[0].icon)
      })
    });

    return (
        <LinearGradient style={styles.gradiant} colors={['#209ebb','#00273a']}>
            <View style={styles.container}>
              <Text style={styles.time}>{fullDate}{"\n"}{city}{"\n"}{horloge}</Text>
                <Image style={styles.image} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}/>
                <View>
                    <Text style={styles.intitule}>{desc}</Text>
                    <Text style={styles.degre}>{temp}°C</Text>
                </View>
                <View style={styles.btn}>
                  {/* Aller vers la page Previsions.jsx */}
                <Text style={styles.btnText} onPress={() => navigation.navigate('Previsions', {name: 'Previsions'})}>Voir les jours suivants</Text>
                <Text style={styles.btnIcon}>🌡️</Text>
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
  },
  btn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#209ebb',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
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