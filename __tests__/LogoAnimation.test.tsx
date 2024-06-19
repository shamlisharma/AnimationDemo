import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LogoAnimation from '../src/components/LogoAnimation';
import {Animated} from 'react-native';

describe('LogoAnimation', () => {
  it('logo rotate correctly', () => {
    const fadeAnim = new Animated.Value(0);
    const rotateAnim = new Animated.Value(0);
    const blinkAnim = new Animated.Value(0);
    const {getByTestId} = render(
      <LogoAnimation
        fadeAnim={fadeAnim}
        rotate={rotateAnim}
        blinkAnim={blinkAnim}
        hide={false}
      />,
    );

    expect(getByTestId('move-logo-test')).toBeTruthy()
  });
});
