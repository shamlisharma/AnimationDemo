// __tests__/CustomInput.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomInput from '../src/components/CustomInput';
import { AppColor } from '../src/config/theme';


describe('CustomInput', () => {
  it('renders correctly with placeholder and no error', () => {
    const { getByPlaceholderText, queryByText } = render(
      <CustomInput placeholder="Email" />
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
  });

  it('handles text input', () => {
    const handleChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Enter text" onChangeText={handleChangeText} />
    );

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Test input');

    expect(handleChangeText).toHaveBeenCalledWith('Test input');
  });

  it('displays an error message', () => {
    const { getByText } = render(
      <CustomInput placeholder="Enter text" error="Error message" />
    );

    expect(getByText('Error message')).toBeTruthy();
  });

});
