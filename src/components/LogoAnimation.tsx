import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
type LogoProps = React.PropsWithChildren<{
  fadeAnim: any;
  rotate: any;
  blinkAnim: any;
  hide: boolean
}>;
const LogoAnimation: React.FC<LogoProps> = ({fadeAnim, rotate, blinkAnim,hide}) => {
  return (
    <>
      <View testID='move-logo-test'
        style={styles.container}>
        <Animated.View
          style={[
            styles.logoContainer,
            {opacity: fadeAnim, transform: [{rotate}]},
          ]}>
          <Image
            source={require('../assets/logo.png')}
            style={[styles.logo, {transform: [{rotate: '0deg'}]}]}
          />
        </Animated.View>
        {!hide && <Animated.View
          style={[styles.blinkOverlay, {transform: [{scale: blinkAnim}]}]}
        />}
      </View>
    </>
  );
};

export default LogoAnimation;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  blinkOverlay: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#ffffff66',
    borderRadius: 50,
  },
  container:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
