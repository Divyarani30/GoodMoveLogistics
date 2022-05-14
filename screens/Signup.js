import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import { Input, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import InputField from './InputField';

export default function Signup({ route }) {
  const { rightIcon, changeIcon } = route.params;
  return (
    <AuthenticationPageWrapper pageTitle={'Customer Registration'} buttonTitle={'Register'}>
      <View style={styles.nameStyle}>
        <InputField iconName={'user-tie'} keyboardType={'default'} placeholderType={'Enter Name'} />
        <InputField iconName={'building'} keyboardType={'default'} placeholderType={'Enter Company Name'} />
        <InputField iconName={'building'} keyboardType={'default'} placeholderType={'Enter Company Type'} />
        <InputField iconName={'mobile-alt'} keyboardType={'numeric'} placeholderType={'Enter Mobile Name'} />
        <InputField
          iconName={'key'}
          keyboardType={'default'}
          placeholderType={'Enter Password'}
          hidePassword={false}
          rightIcon={rightIcon}
          // changeIcon={changeIcon()}
        />
        <InputField
          iconName={'key'}
          keyboardType={'default'}
          placeholderType={'Confirm Password'}
          hidePassword={false}
          rightIcon={rightIcon}
          // changeIcon={changeIcon()}
        />
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  nameStyle: {
    marginTop: 25,
    marginHorizontal: 43,
  },
});
