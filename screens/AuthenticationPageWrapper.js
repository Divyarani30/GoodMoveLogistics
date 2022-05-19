import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stringLiterals } from '../Utils/stringLiterals';

const { CREATE_NEW_PASSWORD_SCREEN, LETS_GO } = stringLiterals;

const {
  PASSWORD_UPDATE,
  PASSWORD_CHANGED_SUCCESSFULLY,
  REGISTRATION_SUCCESSFUL,
  CHANGE_NEW_PASSWORD,
  OTP_VERIFICATION,
  YOUR_REGISTRATION_IS_SUCCESSFUL,
} = CREATE_NEW_PASSWORD_SCREEN;

export default function AuthenticationPageWrapper(props) {
  const { pageTitle, buttonTitle, pageName } = props;
  const navigation = useNavigation();

  const updateHandler = () => {
    Alert.alert(
      PASSWORD_UPDATE,
      PASSWORD_CHANGED_SUCCESSFULLY,
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  const verificationHandler = () => {
    Alert.alert(
      REGISTRATION_SUCCESSFUL,
      YOUR_REGISTRATION_IS_SUCCESSFUL,
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),

          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <ScrollView keyboardDismissMode="on-drag" contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/goodmovelogo.jpg')} />
        <View style={styles.middle}>
          <Text style={styles.LoginText}>{pageTitle}</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.solganText}>{LETS_GO}</Text>
        </View>
        {props.children}
        <View style={styles.buttonStyles}>
          <TouchableOpacity
            onPress={() => {
              if (pageTitle === CHANGE_NEW_PASSWORD) {
                updateHandler();
                navigation.navigate(pageName);
                return;
              } else if (pageTitle === OTP_VERIFICATION) {
                verificationHandler();
                navigation.navigate(pageName);
                return;
              } else {
                navigation.navigate(pageName);
              }
            }}
          >
            <Text style={styles.buttonDesign}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 120,
    height: 80,
    marginHorizontal: 144,
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginText: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#696969',
  },
  solganText: {
    marginTop: 5,
  },
  buttonDesign: {
    paddingVertical: 9,
    paddingHorizontal: 134,
    marginTop: 25,
    marginHorizontal: 43,
    //backgroundColor: '#7d0404',
    //backgroundColor: '#05022e',
    //backgroundColor: '#050140',
    //backgroundColor: '#170247',
    //backgroundColor: '#045704',
    backgroundColor: '#046b04',
    borderRadius: 5,
    fontSize: 13,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyles: {
    marginRight: 3,
  },
});
