import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';


 class WeatherScreen extends React.Component {
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
       <Text style={styles.head}>Weather</Text>
       <Text style={styles.text}>
         Open a new tab in google and type: 'Today's Weather' 
         and you will get the weather of the place you are living in.
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


  export default WeatherScreen