import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function Jour(props) {

    const meteo = props.item;

    const [date, setDate] = useState('');
    const [heure, setHeure] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');
    const [desc, setDesc] = useState('');

  useEffect(() => {

    setDate(meteo.dt_txt.split(" ")[0]);
    setHeure(meteo.dt_txt.split(" ")[1]);
    setTemp(meteo.main.temp.toFixed(0));
    setIcon(meteo.weather[0].icon);
    setDesc(meteo.weather[0].description.charAt(0).toUpperCase() + meteo.weather[0].description.slice(1));

  });

  let day = new Date(date);
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let jour = week[day.getUTCDay()];
    let mois = months[day.getUTCMonth()];
    let chiffre = day.getUTCDate();
    
  return (
      <LinearGradient style={styles.previ} colors={['#f6d365','#fda085']}>
        <View style={styles.dessin}>
            <Image style={styles.image} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}/>
            <Text style={styles.intitule}>{desc}</Text>
        </View>
        <View style={styles.description}>
            <Text style={styles.jour}>{jour} {chiffre} {mois} {"\n"} à {heure.substring(0, heure.length - 3)}</Text>
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
    previ: {
      width: 350,
      height: 150,
      marginTop: 25,
      marginBottom: 15,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 19,
      flex: 1,
      flexDirection: 'row',
    },
    dessin:{
      // marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
    },
    intitule:{
      color: 'white',
      fontSize: 18,
    },
    image:{
      width: 100,
      height: 75,
    //   borderWidth: 4,
    //   borderColor: "#20232a",
    },
    jour:{
      color: 'white',
      fontSize: 17,
    },
    temp:{
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: "center",
    },
  });

export default Jour;