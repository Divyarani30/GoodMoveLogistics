import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Input, NativeBaseProvider, Button, Icon, Box, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';

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
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    //   <View style={styles.container}>
    //     <Image style={styles.tinyLogo} source={require('../assets/goodmovelogo.jpg')} />
    //     <View style={styles.middle}>
    //       <Text style={styles.LoginText}>Customer Login</Text>
    //     </View>
    //     <View style={styles.middle}>
    //       <Text style={styles.solganText}>Let's G-O</Text>
    //     </View>
    <AuthenticationPageWrapper pageTitle={'Customer Login'}>
      <View>
        {/* mobile number, password */}
        <View style={styles.buttonStyle}>
          <View style={styles.mobileInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="mobile-alt" size={24} color="black" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'black',
                  }}
                  _dark={{
                    color: 'gray.300',
                  }}
                />
              }
              variant="outline"
              keyboardType="numeric"
              placeholder="Enter mobile"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </View>
        </View>

        {/* password Input field */}
        <View style={styles.buttonStylesX}>
          <View style={styles.passwordInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'black',
                  }}
                  _dark={{
                    color: 'gray.300',
                  }}
                />
              }
              secureTextEntry={hidePassword}
              InputRightElement={
                <Icon
                  as={<FontAwesome5 name={rightIcon} />}
                  onPress={() => _changeIcon()}
                  mr={3}
                  _light={{
                    color: 'black',
                  }}
                  _dark={{
                    color: 'gray.300',
                  }}
                />
              }
              variant="outline"
              placeholder="Enter Password"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </View>
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
          <TouchableOpacity onPress={() => navigation.navigate('#')}>
            <Text style={styles.forgotPasswordTextStyle}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyles}>
          <TouchableOpacity>
            <Text style={styles.buttonDesign}>Log in</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* BOX */}

        {/* <View style={styles.boxStyles}>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: 'gray.50',
          }}
          _dark={{
            backgroundColor: 'gray.50',
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri:
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
      </View> */}
        {/* </View> */}
        {/* // </TouchableWithoutFeedback> */}
      </View>
    </AuthenticationPageWrapper>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   justifyContent: 'center',
  // },
  // LoginText: {
  //   marginTop: 20,
  //   fontSize: 22,
  //   fontWeight: 'bold',
  // },
  // middle: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
  buttonDesign: {
    padding: 10,
    paddingHorizontal: 140,
    marginTop: 30,
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
  // tinyLogo: {
  //   width: 120,
  //   height: 80,
  //   marginHorizontal: 144,
  // },
  // solganText: {
  //   marginTop: 5,
  // },
});
