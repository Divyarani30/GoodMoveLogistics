import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AuthenticationPageWrapper(props) {
  const { pageTitle, buttonTitle, pageName } = props;
  const navigation = useNavigation();
  return (
    <ScrollView keyboardDismissMode="on-drag" contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/goodmovelogo.jpg')} />
        <View style={styles.middle}>
          <Text style={styles.LoginText}>{pageTitle}</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.solganText}>Let's G-O</Text>
        </View>
        {props.children}
        <View style={styles.buttonStyles}>
          <TouchableOpacity onPress={() => navigation.navigate(pageName)}>
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
