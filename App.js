import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from "@react-navigation/stack";
// import 'react-native-gesture-handler';
import SplashScreen from './components/splash';
// import Splash2Screen from './components/splash2';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash-screen" component={SplashScreen} />
        {/* <Stack.Screen name="splash2-screen" component={Splash2Screen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
