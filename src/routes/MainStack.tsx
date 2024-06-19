import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './type';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParams>();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "splash"
        screenOptions={{
          animation: 'fade',
          headerShown: false,
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
