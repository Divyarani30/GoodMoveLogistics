import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import InputField from './InputField';

export default function CreateNewPassword() {
  return (
    <AuthenticationPageWrapper buttonTitle={'Update'} pageTitle={'Change New Password'}>
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
          placeholderType={'Enter New Password'}
          hidePassword={false}
          //   rightIcon={rightIcon}
          // changeIcon={changeIcon()}
        />
        <InputField
          iconName={'key'}
          keyboardType={'default'}
          placeholderType={'Confirm New Password'}
          hidePassword={false}
          //   rightIcon={rightIcon}
          // changeIcon={_changeIcon}
        />
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  textDesign: {
    marginTop: 30,
    marginBottom: -45,
    marginHorizontal: 36,
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
    // borderColor: '#03DAC6',
    borderColor: '#03DAC6',
    color: '#03DAC6',
  },
  inputFieldWrapper: {
    marginHorizontal: 41,
  },
});
