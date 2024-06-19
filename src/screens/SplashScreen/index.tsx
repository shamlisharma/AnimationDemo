import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import React from 'react';
import {useSplashHook} from './useSplashHook';
import AnimationView from '../../components/AnimationView';
import {AppColor} from '../../config/theme';
import LogoAnimation from '../../components/LogoAnimation';

const SplashScreen = () => {
  const {topToDown, bottomToTop, rotate, fadeAnim, blink, hide} =
    useSplashHook();
  return (
    <>
      <AnimationView
        translateY={topToDown}
        backgroundColor={AppColor.primary}
      />

      <AnimationView
        translateY={bottomToTop}
        backgroundColor={AppColor.primary}
      />
      <LogoAnimation
        fadeAnim={fadeAnim}
        rotate={rotate}
        blinkAnim={blink}
        hide={hide}
      />
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
