import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColor} from '../config/theme';
type InheritTextInputProps = Pick<
  TextInput['props'],
  | 'accessibilityLabel'
  | 'value'
  | 'onChangeText'
  | 'secureTextEntry'
  | 'keyboardType'
  | 'placeholder'
  | 'style'
>;

type CustomInputProps = React.PropsWithChildren<
  {
    error?: string | undefined;
  } & InheritTextInputProps
>;
const CustomInput: React.FC<CustomInputProps> = ({
  accessibilityLabel,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder,
  error,
  style,
}) => {
  return (
    <>
      <TextInput testID="custom-input"
        style={[styles.input, style]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      <Text style={styles.text}>{error}</Text>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomColor: AppColor.lightgray,
    borderWidth: 1,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    paddingBottom: 10,
  },
  text: {color: 'red', fontSize: 13, marginTop: 5, textAlign: 'left'},
});
