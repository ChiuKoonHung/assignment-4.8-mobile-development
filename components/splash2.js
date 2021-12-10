import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
// import 'react-native-gesture-handler';
import splash2 from "../assets/mcdonald-logo.jpg";


export default Splash2Screen =  ({ navigation }) => (
  <View style={styles.container}>
    <Image source={splash2}></Image>
    <Button
      style={styles.button}
      title="Next"
      onPress={() => navigation.navigate("splash-screen")} 
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
