import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { stringLiterals } from '../Utils/stringLiterals';

const { OTP_VERIFICATION_SCREEN, LOGIN_SCREEN, CREATE_NEW_PASSWORD_SCREEN } = stringLiterals;

const { VERIFY_OTP, PLEASE_ENTER_OTP_SENT_TO_MOBILE_NUMBER } = OTP_VERIFICATION_SCREEN;
const { LOGIN } = LOGIN_SCREEN;
const { OTP_VERIFICATION } = CREATE_NEW_PASSWORD_SCREEN;

export default function OTPVerification() {
  const [otp, setOtp] = useState('');
  console.log('otp', otp);
  return (
    <AuthenticationPageWrapper buttonTitle={VERIFY_OTP} pageName={LOGIN} pageTitle={OTP_VERIFICATION}>
      <View>
        <Text style={styles.textDesign}>{PLEASE_ENTER_OTP_SENT_TO_MOBILE_NUMBER}</Text>
      </View>
      <View style={styles.otpInputStyle}>
        <OTPInputView
          pinCount={4}
          style={{ width: '80%', height: 200 }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            setOtp(code);
          }}
        />
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  otpInputStyle: {
    width: '80%',
    height: 100,
    marginHorizontal: 74,
    marginBottom: 35,
  },
  textDesign: {
    marginTop: 30,
    marginBottom: -45,
    marginHorizontal: 73,
  },
  underlineStyleBase: {
    width: 35,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: 'black',
  },
  underlineStyleBase: {
    width: 35,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: 'black',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
    color: '#03DAC6',
  },
});
