import {Animated, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface Props {
  translateY: any;
}
const barHeight = StatusBar.currentHeight ?? 0;
const WelcomeText = ({translateY}: Props) => {
  return (
    <View style={[styles.bottom]}>
      <Animated.Text style={[styles.welcome, {transform: [{translateY}]}]}>
        Welcome Back
      </Animated.Text>
      <Animated.Text style={[styles.continue, {transform: [{translateY}]}]}>
        Login in to continue
      </Animated.Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    fontWeight: '600',
  },
  continue: {
    fontSize: 13,
    marginTop: 5,
  },
  bottom: {paddingBottom: 60, paddingTop: 50},
});
