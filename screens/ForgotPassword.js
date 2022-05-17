import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import { Input, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import InputField from './InputField';

export default function ForgotPassword() {
  return (
    <AuthenticationPageWrapper pageTitle={'Forgot Password'} buttonTitle={'Send'} pageName={'CreateNewPassword'}>
      <View>
        <Text style={styles.textDesign}>Enter Your Mobile Number Used During Registration</Text>
      </View>
      <View style={styles.textInputDesign}>
        <InputField
          iconName={'mobile-alt'}
          keyboardType={'numeric'}
          placeholderType={'Enter mobile'}
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
  },
  textInputDesign: {
    marginTop: 25,
    marginHorizontal: 43,
  },
});
