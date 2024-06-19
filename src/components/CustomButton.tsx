import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColor} from '../config/theme';
type InheritTouchProps = Pick<
  TouchableOpacity['props'],
  'accessibilityLabel'
>;

type CustomButtonProps = React.PropsWithChildren<
  {
    label: string;
    onPress?: () => void
  } & InheritTouchProps
>;

const CustomButton: React.FC<CustomButtonProps> = ({
  accessibilityLabel,
  onPress,
  label,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColor.primary,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  text: {fontSize: 16, color: 'white'},
});
