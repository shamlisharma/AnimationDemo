import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../config/theme';

type NewUserProps = {
  label?: string;
  text?: string;
};
const NewUser = ({label, text}: NewUserProps) => {
  return (
    <Text style={[styles.size]}>
      {label}
      <Text style={styles.color}>{text}</Text>
    </Text>
  );
};

export default NewUser;

const styles = StyleSheet.create({
  size: {fontSize: 15,textAlign:"center",marginBottom:50},
  color: {fontWeight: '600', color: AppColor.primary},
});
