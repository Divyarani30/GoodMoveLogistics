import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Input, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import InputField from './InputField';

export default function Login() {
  const [isSelected, setSelection] = useState(false);
  const [rightIcon, toggleRightIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pageTitle, setPageTitle] = useState('Customer Login');

  const _changeIcon = () => {
    toggleRightIcon((prevIcon) => {
      return prevIcon === 'eye-slash' ? 'eye' : 'eye-slash';
    });
    setHidePassword(!hidePassword);
  };

  const navigation = useNavigation();
  return (
    <AuthenticationPageWrapper pageTitle={'Customer Login'} buttonTitle={'Log in'}>
      <View>
        {/* mobile number, password */}
        <View style={styles.buttonStyle}>
          <InputField iconName={'mobile-alt'} keyboardType={'numeric'} placeholderType={'Enter mobile'} />
        </View>

        {/* password Input field */}
        <View style={styles.buttonStylesX}>
          <InputField
            iconName={'key'}
            keyboardType={'default'}
            placeholderType={'Enter Password'}
            rightIcon={rightIcon}
            changeIcon={_changeIcon}
            hidePassword={hidePassword}
          />
        </View>
        {/* Button */}
        <View style={styles.rememberMeStyle}>
          <CheckBox
            style={styles.checkBoxStyle}
            disabled={false}
            value={isSelected}
            onValueChange={(newValue) => setSelection(newValue)}
          />
          <Text style={styles.rememberMeTextStyle}>Remember Me</Text>
        </View>

        <View style={styles.forgotPasswordTextWraper}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordTextStyle}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        {/* Line */}

        <View style={styles.lineStyles}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={styles.register}>
          <Text style={styles.textStyle}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup', { rightIcon, _changeIcon })}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signUpText: {
    fontWeight: 'bold',
  },
  passwordInput: {
    marginTop: 10,
    marginRight: 5,
  },
  mobileInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonStylesX: {
    marginTop: 12,
    marginLeft: 40,
    marginRight: 40,
  },

  lineStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  textStyle: {
    marginRight: 10,
  },
  checkBoxStyle: {
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: '#d4d6ce',
  },
  rememberMeStyle: {
    flexDirection: 'row',
  },
  rememberMeTextStyle: {
    marginTop: 30,
    marginLeft: 10,
  },
  forgotPasswordTextWraper: {
    marginTop: -22,
    marginLeft: 250,
  },
});
