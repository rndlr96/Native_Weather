import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends React.Component {

  state = {
    isLoaded: true
  }

   render() {
     const {isLoaded} = this.state;
     return (
       <View style={styles.container}>
         <StatusBar barStyle = "light-content"/>
         {
           isLoaded ? (
             <Weather/>
           ) : (
             <View style={styles.loading}>
               <ActivityIndicator/>
               <Text style = {styles.loadingtext}>Now I getting the Weather</Text>
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
