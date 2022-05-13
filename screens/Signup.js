import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Signup({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.navigate('Login')} />
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      /> */}
    </View>
  );
}
