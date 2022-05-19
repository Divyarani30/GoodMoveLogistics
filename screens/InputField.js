import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Input, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { changeIcon } from '../Utils/utils';

export default function InputField(props) {
  console.log(setState, 'setState-----');
  const {
    iconName,
    keyboardType,
    placeholderType,
    hidePassword,
    rightIcon,
    toggleRightIcon,
    setHidePassword,
    setState,
    value,
    name,
  } = props;
  return (
    <View style={styles.inputStyle}>
      <Input
        InputLeftElement={
          <Icon
            as={<FontAwesome5 name={iconName} size={24} color="black" />}
            size="sm"
            m={4}
            _light={{
              color: 'black',
            }}
            _dark={{
              color: 'gray.300',
            }}
          />
        }
        value={value}
        name={name}
        onChangeText={(e) => setState(e)}
        variant="outline"
        keyboardType={keyboardType}
        placeholder={placeholderType}
        secureTextEntry={hidePassword}
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
        InputRightElement={
          <Icon
            as={<FontAwesome5 name={rightIcon} />}
            onPress={() => changeIcon(toggleRightIcon, hidePassword, setHidePassword)}
            mr={3}
            _light={{
              color: 'black',
            }}
            _dark={{
              color: 'gray.300',
            }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 10,
    marginRight: 5,
    padding: 2,
  },
});
