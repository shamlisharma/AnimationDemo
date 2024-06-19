import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GREENLOGO} from '../config/icons';
type MoveLogoProps = {
  position: any;
  height:any,
  width:any
};
const MoveLogo = ({position,height,width}: MoveLogoProps) => {
  return (
    <View testID='move-logo-test' style={styles.container}>
      <Animated.View style={[ position.getLayout(),{height,width}]}>
        <Image source={GREENLOGO} resizeMode='contain' style={styles.logo} />
      </Animated.View>
    </View>
  );
};

export default MoveLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});
