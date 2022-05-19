import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import { Input, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import InputField from './InputField';
import { stringLiterals } from '../Utils/stringLiterals';

const { FORGOT_PASSWORD_SCREEN } = stringLiterals;
const { ENTER_YOUR_MOBILE_NUMBER_USED_DURING_REGISTRATION, ENTER_MOBILE, FORGOT_PASSWORD, SEND, CREATE_NEW_PASSWORD } =
  FORGOT_PASSWORD_SCREEN;

export default function ForgotPassword() {
  return (
    <AuthenticationPageWrapper pageTitle={FORGOT_PASSWORD} buttonTitle={SEND} pageName={CREATE_NEW_PASSWORD}>
      <View>
        <Text style={styles.textDesign}>{ENTER_YOUR_MOBILE_NUMBER_USED_DURING_REGISTRATION}</Text>
      </View>
      <View style={styles.textInputDesign}>
        <InputField
          iconName={'mobile-alt'}
          keyboardType={'numeric'}
          placeholderType={ENTER_MOBILE}
          hidePassword={false}
        />
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  textDesign: {
    marginTop: 30,
    marginHorizontal: 25,
    color: '#696969',
  },
  textInputDesign: {
    marginTop: 25,
    marginHorizontal: 43,
  },
});
