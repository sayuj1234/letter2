import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';


 class NewsScreen extends React.Component {
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
       <Text style={styles.head}> Top News </Text>
       <Text style={styles.text}>
         Science, crime, medicine, archaeology, nature — if it’s interesting
          news, you’ll find it here. Stories like these may not always be the
          ones atop your news feed, but chances are they’re the ones you’ll
          actually want to read. Whether it’s stories of weird animals, grisly
          crimes, interstellar drama, or the just plain unbelievable, these are
          the most interesting news articles you’ll find anywhere. From a
          nine-year-old boy’s accidental uncovering of a previously-unknown
          human ancestor called Australopithecus sediba to new revelations about
          how the Ancient Egyptian pyramids were built, interesting news stories
          like these represent the discoveries that unlock the secrets of
          humanity’s past. And in addition to uncovering our past, these
          interesting current events furthermore chart the course of our present
          — from the serious all the way down to weird news of the “Florida man”
          variety — and our future — from the latest technological advances to
          the Jupiter pictures coming back from the outer reaches of our solar
          system. It could be awe-inspiring photos of celestial bodies, it could
          be the most bizarre story of mayhem down here on Earth. Check it out at 
           All That’s Interesting.
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



  export default NewsScreen