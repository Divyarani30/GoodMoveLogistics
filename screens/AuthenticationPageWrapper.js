import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Login from './Login';
export default function AuthenticationPageWrapper(props) {
  //const { pageTitle } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/goodmovelogo.jpg')} />
        <View style={styles.middle}>
          <Text style={styles.LoginText}>{props.pageTitle}</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.solganText}>Let's G-O</Text>
        </View>
      </View>
      {props.children}
    </TouchableWithoutFeedback>
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
  },
  solganText: {
    marginTop: 5,
  },
});
