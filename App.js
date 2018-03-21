import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Rain from "./Weather/Rain";
import Sunny from "./Weather/Sunny";
import Cloud from "./Weather/Cloud";

const API_KEY = '45ae472d107e47842765826a9194ede3';

export default class App extends React.Component {

  state = {
    isLoaded: false,
    error: null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
          this.setState({
            isLoaded: false,
            error: "Something went Wrong"
          });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
  };

   render() {
     const {isLoaded, error} = this.state;
     return (
       <View style={styles.container}>
         <StatusBar barStyle = "light-content"/>
         {
           isLoaded ? (
             <Cloud/>
           ) : (
             <View style={styles.loading}>
               <ActivityIndicator/>
               <Text style = {styles.loadingtext}>Now I getting the Weather</Text>
               {error ? <Text style = {styles.errorText}>{error}</Text> : null}
             </View>
           )
         }
       </View>
     );
   }
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
    backgroundColor: '#fff'
  },

  errorText: {
    color: "red"
  },

  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  loadingtext:{
    fontSize:30,
    marginBottom: 100
  }
});
