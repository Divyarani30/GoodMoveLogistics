import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Input, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import InputField from './InputField';
import { stringLiterals } from '../Utils/stringLiterals';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { phoneRegExp } from '../Utils/regex';
const { LOGIN_SCREEN } = stringLiterals;

const {
  CUSTOMER_LOGIN,
  LOGIN,
  ENTER_MOBILE,
  ENTER_PASSWORD,
  REMEMBER_ME,
  FORGOT_PASSWORD,
  OR,
  DONT_HAVE_AN_ACCOUNT,
  SIGN_UP,
} = LOGIN_SCREEN;

const validationSchema = Yup.object({
  mobileNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('mobile number is required'),
  password: Yup.string().trim().min(8, 'password is too short').required('password is required'),
});

export default function Login() {
  const [isSelected, setSelection] = useState(false);
  const [rightIcon, toggleRightIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // const userInfo = {
  //   password: '',
  //   mobileNumber: '',
  // };

  const navigation = useNavigation();
  return (
    <AuthenticationPageWrapper
      pageTitle={CUSTOMER_LOGIN}
      buttonTitle={LOGIN}
      // mobileNumber={mobileNumber}
      // password={password}
    >
      <View>
        {/* mobile number, password */}
        <Formik
          initialValues={{ mobileNumber: '', password: '' }}
          validationSchema={validationSchema}
          // onSubmit={(values, formikActions) => {
          //   console.log(values, '------submited values');
          // }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            const { mobileNumber, password } = values;
            console.log(values, 'values------');
            return (
              <>
                <View style={styles.buttonStyle}>
                  <InputField
                    iconName={'mobile-alt'}
                    keyboardType={'numeric'}
                    placeholderType={ENTER_MOBILE}
                    error={touched.mobileNumber && errors.mobileNumber}
                    setState={handleChange}
                    onBlur={handleBlur('mobileNumber')}
                    name={'mobileNumber'}
                    value={mobileNumber}
                  />
                </View>

                {/* password Input field */}
                <View style={styles.buttonStylesX}>
                  <InputField
                    iconName={'key'}
                    keyboardType={'default'}
                    placeholderType={ENTER_PASSWORD}
                    error={touched.password && errors.password}
                    rightIcon={rightIcon}
                    toggleRightIcon={toggleRightIcon}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    setState={handleChange}
                    onBlur={handleBlur('password')}
                    name={'password'}
                    value={password}
                  />
                </View>
              </>
            );
          }}
        </Formik>

        {/* Button */}
        <View style={styles.rememberMeStyle}>
          <CheckBox
            style={styles.checkBoxStyle}
            disabled={false}
            value={isSelected}
            onValueChange={(newValue) => setSelection(newValue)}
          />
          <Text style={styles.rememberMeTextStyle}>{REMEMBER_ME}</Text>
        </View>

        <View style={styles.forgotPasswordTextWraper}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordTextStyle}>{FORGOT_PASSWORD}</Text>
          </TouchableOpacity>
        </View>

        {/* Line */}

        <View style={styles.lineStyles}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>{OR}</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={styles.register}>
          <Text style={styles.textStyle}>{DONT_HAVE_AN_ACCOUNT}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup', { rightIcon, toggleRightIcon, setHidePassword, hidePassword })}
          >
            <Text style={styles.signUpText}>{SIGN_UP}</Text>
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
    marginTop: 5,
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
    marginTop: 5,
    marginRight: 10,
    color: '#696969',
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
    color: '#696969',
  },
  forgotPasswordTextWraper: {
    marginTop: -22,
    marginLeft: 250,
  },
  forgotPasswordTextStyle: {
    fontWeight: 'bold',
  },
});
