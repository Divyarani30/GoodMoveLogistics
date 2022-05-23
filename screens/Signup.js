import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import InputField from './InputField';
import { stringLiterals } from '../Utils/stringLiterals';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { phoneRegExp } from '../Utils/regex';

import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const { SIGN_UP_SCREEN, LOGIN_SCREEN } = stringLiterals;
const {
  CUSTOMER_REGISTRATION,
  OTP_VERIFICATION,
  REGISTER,
  ENTER_NAME,
  ENTER_COMPANY_NAME,
  CHOOSE_COMPANY_TYPE,
  COMPANY_TYPE,
  ENTER_MOBILE_NUMBER,
  ENTER_MAIL,
  ENTER_GST_NUMBER,
  CONFIRM_PASSWORD,
  ALREADY_HAVE_AN_ACCOUNT,
} = SIGN_UP_SCREEN;

const { ENTER_PASSWORD, LOGIN } = LOGIN_SCREEN;

const validationSchema = Yup.object({
  userName: Yup.string().trim().min(3, 'Invalid name!').required('Username is required!'),
  companyName: Yup.string().trim().required('Company name is required'),
  mobileNum: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('mobile number is required'),
  email: Yup.string().email('Invalid Email').required('Email is required!'),
  GST: Yup.string().min(15, 'Invalid GST number').required('GST number is required!'),
  firstPassword: Yup.string().trim().min(6, 'Password is too short!').required('Password is required'),
  confirmPassword: Yup.string().equals([Yup.ref('firstPassword'), null], 'Password does not match'),
});

export default function Signup({ route }) {
  // const { rightIcon, toggleRightIcon, setHidePassword, hidePassword } = route.params;
  const [rightIcon, toggleRightIcon] = useState('eye-slash');
  const [hidePassword, setHidePassword] = useState(true);
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  // const [companyType, setCompanyType] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [email, setEmail] = useState('');
  const [GST, setGST] = useState('');
  const [firstPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const [companyTypes, setCompanyType] = useState([
    'Furniture',
    'Food & Beverages',
    'Machines/Equipments/SpareParts',
    'Wood/Plywood/Timber',
    'Courier/Mover and Packers',
    'Automobile Parts',
    'Oils/Chemicals/Paints',
    'Tiles/Ceramics',
    'Pipes/Metal Rods(less than 6ft)',
    'Metal Sheets',
    'Garments/Apparel/Textiles',
    'Electrical/Electronics',
  ]);

  const companyTypeList = () => {
    return companyTypes.map((itemValue) => {
      return <Picker.item style={{ fontSize: 12 }} key={itemValue} label={itemValue} value={itemValue} />;
    });
  };

  const [selectedCompanyType, setSelectedCompanyType] = useState();
  return (
    <AuthenticationPageWrapper
      pageTitle={CUSTOMER_REGISTRATION}
      pageName={OTP_VERIFICATION}
      buttonTitle={REGISTER}
      userName={userName}
      companyName={companyName}
      mobileNum={mobileNum}
      email={email}
      GST={GST}
      firstPassword={firstPassword}
      confirmPassword={confirmPassword}
    >
      <View style={styles.nameStyle}>
        <Formik
          initialValues={{
            userName: '',
            companyName: '',
            mobileNum: '',
            email: '',
            GST: '',
            firstPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            console.log(values, 'values------');
            return (
              <>
                <InputField
                  iconName={'user-tie'}
                  keyboardType={'default'}
                  placeholderType={ENTER_NAME}
                  setState={setUserName}
                  name={'userName'}
                  value={userName}
                />
                <InputField
                  iconName={'building'}
                  keyboardType={'default'}
                  placeholderType={ENTER_COMPANY_NAME}
                  setState={setCompanyName}
                  name={'companyName'}
                  value={companyName}
                />
                <View style={styles.pickerStyle}>
                  <Image style={styles.dropdown_image} mode="stretch" source={require('../assets/buildingIcon2.png')} />
                  <Picker
                    style={styles.pickerWrapper}
                    selectedValue={selectedCompanyType}
                    onValueChange={(itemValue) => setSelectedCompanyType(itemValue)}
                  >
                    <Picker.Item
                      style={{ fontSize: 12, color: '#78909c' }}
                      key={CHOOSE_COMPANY_TYPE}
                      label={CHOOSE_COMPANY_TYPE}
                      value={COMPANY_TYPE}
                    />
                    {companyTypeList()}
                    {/* <Picker.Item style={{ fontSize: 12, color: '#78909c' }} label="Choose Company Type" value="companyType" />
            <Picker.Item style={{ fontSize: 12 }} label="Furniture" value="furniture" />
            <Picker.Item style={{ fontSize: 12 }} label="Food & Beverages" value="food&bev" />
            <Picker.Item style={{ fontSize: 12 }} label="Machines/Equipments/SpareParts" value="machines/equip" />
            <Picker.Item style={{ fontSize: 12 }} label="Wood/Plywood/Timber" value="woodItems" />
            <Picker.Item style={{ fontSize: 12 }} label="Courier/Mover and Packers" value="Courier" />
            <Picker.Item style={{ fontSize: 12 }} label="Automobile Parts" value="Automobiles" />
            <Picker.Item style={{ fontSize: 12 }} label="Oils/Chemicals/Paints" value="Chemicals" />
            <Picker.Item style={{ fontSize: 12 }} label="Tiles/Ceramics" value="ceramics" />
            <Picker.Item style={{ fontSize: 12 }} label="Pipes/Metal Rods(less than 6ft)" value="MetalRods" />
            <Picker.Item style={{ fontSize: 12 }} label="Metal Sheets" value="MetalSheets" />
            <Picker.Item style={{ fontSize: 12 }} label="Garments/Apparel/Textiles" value="Garments" />
            <Picker.Item style={{ fontSize: 12 }} label="Electrical/Electronics" value="Garments" /> */}
                  </Picker>
                </View>
                <InputField
                  iconName={'mobile-alt'}
                  keyboardType={'numeric'}
                  placeholderType={ENTER_MOBILE_NUMBER}
                  setState={setMobileNum}
                  name={'mobileNum'}
                  value={mobileNum}
                />
                <InputField
                  iconName={'envelope'}
                  keyboardType={'default'}
                  placeholderType={ENTER_MAIL}
                  setState={setEmail}
                  name={'email'}
                  value={email}
                />
                <InputField
                  iconName={'file-invoice'}
                  keyboardType={'default'}
                  placeholderType={ENTER_GST_NUMBER}
                  setState={setGST}
                  name={'GST'}
                  value={GST}
                />
                <InputField
                  iconName={'key'}
                  keyboardType={'default'}
                  placeholderType={ENTER_PASSWORD}
                  hidePassword={hidePassword}
                  rightIcon={rightIcon}
                  toggleRightIcon={toggleRightIcon}
                  setHidePassword={setHidePassword}
                  setState={setPassword}
                  name={'firstPassword'}
                  value={firstPassword}
                />
                <InputField
                  iconName={'key'}
                  keyboardType={'default'}
                  placeholderType={CONFIRM_PASSWORD}
                  hidePassword={hidePassword}
                  rightIcon={rightIcon}
                  toggleRightIcon={toggleRightIcon}
                  setHidePassword={setHidePassword}
                  setState={setConfirmPassword}
                  name={'confirmPassword'}
                  value={confirmPassword}
                />
              </>
            );
          }}
        </Formik>

        {/* <InputField iconName={'building'} keyboardType={'default'} placeholderType={'Enter Company Type'} /> */}

        <View style={styles.loginBack}>
          <Text style={styles.textStyle}>{ALREADY_HAVE_AN_ACCOUNT}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>{LOGIN}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  nameStyle: {
    marginTop: 25,
    marginHorizontal: 43,
  },
  loginBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  textStyle: {
    marginTop: 14,
    marginRight: 10,
    color: '#696969',
  },
  loginText: {
    marginTop: 14,
    fontWeight: 'bold',
  },
  pickerStyle: {
    // flexDirection: 'row',
    marginTop: 10,
    marginRight: 7,
    marginLeft: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#c7c5b9',
    overflow: 'hidden',
  },
  dropdown_image: {
    marginLeft: 15,
    marginTop: 15,
    width: 18,
    height: 18,
  },
  pickerWrapper: {
    marginLeft: 52,
    marginTop: -35,
  },
});
