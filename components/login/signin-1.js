import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import splash from "..../assets/mcdonald-logo.jpg";


const SplashScreen =  ({ navigation }) => (
  <View style={styles.container}>
    <Image source={splash}></Image>
    <Button
      style={styles.button}
      title="Next"
      onPress={() => navigation.navigate("splash-screen")} 
    ></Button>
  </View>
);

const Stack = createStackNavigator();

export default function Splash2() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="splash-screen" component={SplashScreen} />
      </Stack.Navigator>
  );
}


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
