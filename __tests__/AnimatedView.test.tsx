import 'react-native'
import React from 'react'
import AnimationView from '../src/components/AnimationView'
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { Animated, Dimensions } from 'react-native';

describe("AnimationView",()=>{
    it('view render correctly top to bottom and bottom to top',()=>{
        const translateY = new Animated.Value(-Dimensions.get('window').height)
        const {getByTestId} = render(
            <AnimationView translateY={translateY} />
        );

        expect(getByTestId("animated-view")).toBeTruthy()
    })
})