import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.redView}/>
        <View style = {styles.yellowView}/>
        <View style = {styles.redView}/>
        <View style = {styles.yellowView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  redView : {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    alignSelf: 'center'
  },

  yellowView : {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    alignSelf:'flex-start'
  }
});
