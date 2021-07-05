import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';


 class HoroScope extends React.Component {
  render() {
    return (
      <View >
       <AppHeader/>-
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('HomeScreen');}}>
      <Image
            style={{ width: 50, height: 50,  marginLeft: 10}}
            source={require('../assets/back-arrow.png')}
            />
      </TouchableOpacity>
       <Text style={styles.head}>Horoscope of Today</Text>
       <Text style={styles.text}>
          Daily horoscope: Are the stars lined up in your favour?
          Find out the astrological prediction for Aries, Leo, Virgo,
          Libra and other zodiac signs for January 9th at - 
          https://www.hindustantimes.com/lifestyle/horoscope-today-astrological-prediction-for-january-9-101610152916556.html .
        </Text>
      </View>
);

  }}

  const styles = StyleSheet.create({
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: 'yellow',
    marginTop: 10,
    fontWeight: 'bold',
    borderRadius: 15
  },
  text: {
    marginBottom: 15,
    fontWeight: 'bold',
  }
  });



  export default HoroScope