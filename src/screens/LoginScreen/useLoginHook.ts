import {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions, Platform, StatusBar} from 'react-native';

export function useLoginHook() {
  const position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const height = useRef(new Animated.Value(100)).current;
  const width = useRef(new Animated.Value(100)).current;
  const translateY = useRef(new Animated.Value(-30)).current;
  const opacity = useRef(new Animated.Value(0)).current;
const barHeight = StatusBar.currentHeight ?? 0;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(height, {
        toValue: 70,
        duration: 800,
        useNativeDriver: false, // Native driver doesn't support height animations
      }),
      Animated.timing(width, {
        toValue: 70,
        duration: 800,
        useNativeDriver: false, // Native driver doesn't support height animations
      }),
      Animated.timing(position, {
        toValue: {x: -155, y: -240 - barHeight},
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start(() => {
      moveText();
    });
  }, [position, height, width]);

  const moveText = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY]);

  return {
    position,
    translateY,
    opacity,
    height,
    width,
  };
}
