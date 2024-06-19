import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {StackParams} from '../../routes/type';

export function useSplashHook() {
  const topToDown = useRef(
    new Animated.Value(-Dimensions.get('window').height),
  ).current;
  const bottomToTop = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value is 0
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const blinkAnim = useRef(new Animated.Value(0)).current;
  const [hide, setHide] = useState<boolean>(false);
  const {replace} = useNavigation<StackParams>();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(topToDown, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(bottomToTop, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(result => result.finished && logoAnimation());
  }, [topToDown, bottomToTop]);

  const logoAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(blinkAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      replace('login');
    });
    setTimeout(() => {
      setHide(true);
    }, 100);
  }, [fadeAnim, rotateAnim, blinkAnim]);

  const blink = blinkAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get('window').width * 2],
  });

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '00deg'],
  });
  return {
    topToDown,
    bottomToTop,
    rotate,
    fadeAnim,
    blink,
    hide,
  };
}
