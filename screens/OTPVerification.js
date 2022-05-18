import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function OTPVerification() {
  return (
    <AuthenticationPageWrapper buttonTitle={'Verify'} pageName={'Login'} pageTitle={'OTP Verification'}>
      <View>
        <Text style={styles.textDesign}>Enter 4 digit code sent to your Mobile number (to show the phone number)</Text>
      </View>
      <View style={styles.otpInputStyle}>
        <OTPInputView
          pinCount={4}
          style={{ width: '80%', height: 200 }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
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
    marginHorizontal: 36,
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
