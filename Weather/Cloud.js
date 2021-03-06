import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";
import { Ionicons } from "@expo/vector-icons"
import PropTypes from "prop-types";


function Cloud({ temp }){
  return(
    <LinearGradient colors={["#a1a1a1", "#e4e4e4"]} style={styles.container}>
      <View style={ styles.upper }>
        <Ionicons style = { styles.icon } color = "white" size = {144} name = "md-cloud"/>
        <Text style = { styles.temp }>{temp}°</Text>
      </View>

      <View style={styles.lower}>
        <Text style = { styles.title }>Raining Now</Text>
        <Text style = { styles.subtitle }>Must bring user umbrella</Text>
      </View>
    </LinearGradient>
  );
}

Cloud.PropTypes = {
  temp : PropTypes.number.isRequired
};

export default Cloud;

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
