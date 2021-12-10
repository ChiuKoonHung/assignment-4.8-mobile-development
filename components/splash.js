import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
// import 'react-native-gesture-handler';
import splash from "../assets/macdonald.gif";


export default SplashScreen =  ({ navigation }) => (
  <View style={styles.container}>
    <Image source={splash}></Image>
    <Button
      style={styles.button}
      title="Next"
      onPress={() => navigation.navigate("splash2-screen")}    
    ></Button>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
