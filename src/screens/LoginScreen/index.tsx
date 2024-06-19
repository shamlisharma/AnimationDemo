import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {loginSchema} from '../../schema/loginSchema';
import {useLoginHook} from './useLoginHook';
import {LOGO} from '../../config/icons';
import CustomInput from '../../components/CustomInput';
import {AppColor} from '../../config/theme';
import CustomButton from '../../components/CustomButton';
import NewUser from '../../components/NewUser';
import MoveLogo from '../../components/MoveLogo';
import WelcomeText from '../../components/WelcomeText';

const LoginScreen = () => {
  const {position, translateY, opacity, height, width} = useLoginHook();
  const handleSubmit = ({}) => {};
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}>
      {({values, touched, errors, handleChange, handleSubmit}) => (
        <>
          <MoveLogo position={position} height={height} width={width} />
          <Animated.View
            style={[styles.container, {opacity}]}>
            <WelcomeText translateY={translateY} />
            <CustomInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              error={touched.email && errors.email ? errors.email : undefined}
            />
            <CustomInput
              style={styles.top}
              placeholder="Password"
              keyboardType="ascii-capable"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              error={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
            />
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Animated.View>
          <Animated.View style={{opacity}}>
            <CustomButton
              accessibilityLabel="custom-button"
              onPress={handleSubmit}
              label="Submit"
            />
            <NewUser label="New User? " text="Sign Up" />
          </Animated.View>
        </>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  top: {marginTop: 30},
  forgot: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'right',
    color: AppColor.gray,
  },
});
