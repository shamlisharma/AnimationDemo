import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomButton from '../src/components/CustomButton';
import {AppColor} from '../src/config/theme';

test('it renders correctly', () => {
  const {getByText} = render(
    <CustomButton label="Submit" onPress={() => {}} />,
  );
  const buttonElement = getByText('Submit');
  expect(buttonElement).toBeTruthy();
});

test('it calls onPress when pressed', () => {
  const onPressMock = jest.fn();
  const {getByText} = render(
    <CustomButton label="Submit" onPress={onPressMock} />,
  );
  const buttonElement = getByText('Submit');

  fireEvent.press(buttonElement);

  expect(onPressMock).toHaveBeenCalled();
});
