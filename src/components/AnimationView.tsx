import {Animated, ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
type AnimatedProps = React.PropsWithChildren<{
  translateY?: any;
  backgroundColor?: ColorValue | undefined;
}>;
const AnimationView: React.FC<AnimatedProps> = ({
  translateY,
  backgroundColor,
}) => {
  return (
    <Animated.View
      testID="animated-view"
      style={[styles.animatedView, {transform: [{translateY}]}]}>
      <View testID="inner-view" style={[styles.innerView, {backgroundColor}]} />
    </Animated.View>
  );
};

export default AnimationView;

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  innerView: {
    flex: 1,
  },
});
