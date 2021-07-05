import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';


 class JokeScreen extends React.Component {
  render() {
    return (
      <View>
      <AppHeader/>-
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('HomeScreen');}}>
      <Image
            style={{ width: 50, height: 50,  marginLeft: 10}}
            source={require('../assets/back-arrow.png')}
            />
      </TouchableOpacity>
      <Text style={styles.head}> Jokes </Text>
      <Image
            style={styles.images}
            source={require('../assets/joke1..jpg')}
            />
       <Image
            style={styles.images}
            source={require('../assets/joke2..jpg')}
            />
       <Image
            style={styles.images}
            source={require('../assets/joke3..jpg')}
            />          
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
  images: {
    marginLeft:10,
    width: 290,
    height: 250,
    borderColor: 'black',
    borderWidth: 3
  },
  });

  export default JokeScreen