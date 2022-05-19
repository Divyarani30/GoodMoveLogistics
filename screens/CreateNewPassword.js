import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import InputField from './InputField';
import { stringLiterals } from '../Utils/stringLiterals';

const { CREATE_NEW_PASSWORD_SCREEN, LOGIN_SCREEN } = stringLiterals;
const { LOGIN } = LOGIN_SCREEN;
const { PLEASE_ENTER_OTP_SENT_TO_MOBILE_NUMBER, ENTER_NEW_PASSWORD, CONFIRM_PASSWORD, UPDATE, CHANGE_NEW_PASSWORD } =
  CREATE_NEW_PASSWORD_SCREEN;

export default function CreateNewPassword() {
  const [rightIcon, toggleRightIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return (
    <AuthenticationPageWrapper
      buttonTitle={UPDATE}
      pageName={LOGIN}
      pageTitle={CHANGE_NEW_PASSWORD}
      newPassword={newPassword}
      confirmNewPassword={confirmNewPassword}
    >
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
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      {/* <OTPInputView
        style={{ width: '80%', height: 200 }}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      /> */}
      <View style={styles.inputFieldWrapper}>
        <InputField
          iconName={'key'}
          keyboardType={'default'}
          placeholderType={ENTER_NEW_PASSWORD}
          hidePassword={hidePassword}
          rightIcon={rightIcon}
          toggleRightIcon={toggleRightIcon}
          setHidePassword={setHidePassword}
          setState={setNewPassword}
          name={'newPassword'}
          value={newPassword}
        />
        <InputField
          iconName={'key'}
          keyboardType={'default'}
          placeholderType={CONFIRM_PASSWORD}
          hidePassword={hidePassword}
          rightIcon={rightIcon}
          toggleRightIcon={toggleRightIcon}
          setHidePassword={setHidePassword}
          setState={setConfirmNewPassword}
          name={'confirmNewPassword'}
          value={confirmNewPassword}
        />
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  textDesign: {
    marginTop: 30,
    marginBottom: -45,
    marginHorizontal: 73,
    color: '#696969',
  },
  textInputDesign: {
    marginTop: 25,
    marginHorizontal: 43,
  },
  otpInputStyle: {
    width: '80%',
    height: 100,
    marginHorizontal: 74,
    marginBottom: 35,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
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
  inputFieldWrapper: {
    marginHorizontal: 41,
  },
});
