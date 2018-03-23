import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import PropTypes from "prop-types"

const weatherCases = {
  Rain: {
    colors : ["#00C6FB", "#005BEA"],
    title : "Raining Now",
    subtitle : "Must bring user umbrella",
    icon : "weather-pouring"
  },

  Clear: {
    colors : ["#ffe24b", "#ffa800"],
    title : "Sunny Now",
    subtitle : "Playing Outside",
    icon : "weather-sunny"
  },

  Thunderstorm: {
    colors : ["#00ECBC", "#007ADF"],
    title : "Thunderstorm Now",
    subtitle : "Actually, outside of the house",
    icon : "weather-lightning"
  },

  Cloud: {
    colors : ["#a1a1a1", "#363636"],
    title : "Cloudy Now",
    subtitle : "Take you mask",
    icon : "weather-partlycloudy"
  },

  Haze: {
    colors : ["#a1a1a1", "#363636"],
    title : "Haze Now",
    subtitle : "Take you mask",
    icon : "weather-fog"
  },

  Snow: {
    colors : ["#7DE2FC", "#89B6E5"],
    title : "Snowy Now",
    subtitle : "Do you want to build a snowman",
    icon : "weather-hail"
  },

  Drizzle: {
    colors : ["#89F7FE", "#66A6FF"],
    title : "Drizzle Now",
    subtitle : "Is like rain, but not",
    icon : "weather-rainy"
  },

  Mist: {
    colors : ["#89F7FE", "#66A6FF"],
    title : "Mist Now",
    subtitle : "Maybe you will feel bad",
    icon : "weather-fog"
  }
};

function Weather({ weatherName, temp }){
  return(
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={ styles.upper }>
        <MaterialCommunityIcons style = { styles.icon } color = "white" size = {144}  name={weatherCases[weatherName].icon}/>
        <Text style = { styles.temp }>{ temp }°</Text>
      </View>

      <View style={styles.lower}>
        <Text style = { styles.title }>{weatherCases[weatherName].title}</Text>
        <Text style = { styles.subtitle }>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp : PropTypes.number.isRequired,
  weatherName : PropTypes.string.isRequired
}

export default Weather;

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
