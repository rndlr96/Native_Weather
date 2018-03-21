import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";
import { Ionicons } from "@expo/vector-icons"

export default class Weather extends Component{
  render(){
    return(
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={ styles.upper }>
          <Ionicons style = { styles.icon } color = "white" size = {144} name = "md-rainy"/>
          <Text style = { styles.temp }>35</Text>
        </View>

        <View style={styles.lower}>
          <Text style = { styles.title }>Raining Now</Text>
          <Text style = { styles.subtitle }>Must bring user umbrella</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icon: {
    paddingTop: 70
  },

  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  temp: {
    fontSize: 38,
    marginTop: 10,
    color: 'white',
    fontWeight: '400'
  },

  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end',
  },

  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '600'
  },

  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 70,
    fontWeight: '400'
  }
});
