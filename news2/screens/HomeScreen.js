import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  dislikePressed(){
    var dislike = db.ref('Rating/'+'/')
    dislike.update({
      'dislikePressed': 1
    })
  }

  likePressed(){
    var like = db.ref('Rating/'+'/')
    like.update({
      'likePressed': 1
    })
  }

  render() {
    return (
      <View>
        <AppHeader/>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#CC99FF' }]}
          onPress={() => {this.props.navigation.navigate('JokeScreen');}}>
          <Text style={styles.buttonText}>Jokes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#CC99FF' }]}
          onPress={() => {this.props.navigation.navigate('HoroScope');}}>
          <Text style={styles.buttonText}>HoroScope</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={[styles.button, { backgroundColor: '#CC99FF' }]}
          onPress={() => {this.props.navigation.navigate('WeatherScreen');}}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#CC99FF' }]}
          onPress={() => {this.props.navigation.navigate('NewsScreen');}}>
          <Text style={styles.buttonText}>Top News</Text>
        </TouchableOpacity>
        
        <View style={styles.ratingContainer}>
          <Text style={{ textAlign: 'center', margin: 5}}> Rate Us </Text>
          <TouchableOpacity onPress={this.likePressed}>
          <Image
            style={{ width: 50, height: 50, marginLeft: 5}}
            source={require('../assets/thumbsup.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dislikePressed}>
          <Image
            style={{ width: 50, height: 50, marginTop: -35, marginLeft: 100}}
            source={require('../assets/thumbsdown.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 30,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  ratingContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15
  }
});

