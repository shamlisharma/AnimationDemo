import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import MoveLogo from '../src/components/MoveLogo';
import { Animated } from 'react-native';

describe("MoveLogo",()=>{
    it('logo move correctly center to top left',()=>{
        const position = new Animated.ValueXY({x:0, y:0});
        const height = new Animated.Value(100);
        const width = new Animated.Value(100)
        const {getByTestId} = render(
            <MoveLogo position={position} height={height} width={width} />
        );

        expect(getByTestId("move-logo-test")).toBeTruthy()
    })
})