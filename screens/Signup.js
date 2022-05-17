import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import AuthenticationPageWrapper from './AuthenticationPageWrapper';
import { Input, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import InputField from './InputField';

export default function Signup({ route }) {
  const { rightIcon, _changeIcon } = route.params;

  const navigation = useNavigation();
  const [companyTypes, setCompanyType] = useState([
    'Choose Company Type',
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
    <AuthenticationPageWrapper pageTitle={'Customer Registration'} buttonTitle={'Register'}>
      <View style={styles.nameStyle}>
        <InputField iconName={'user-tie'} keyboardType={'default'} placeholderType={'Enter Name'} />
        <InputField iconName={'building'} keyboardType={'default'} placeholderType={'Enter Company Name'} />
        {/* <InputField iconName={'building'} keyboardType={'default'} placeholderType={'Enter Company Type'} /> */}
        <View style={styles.pickerStyle}>
          <Image style={styles.dropdown_image} mode="stretch" source={require('../assets/buildingIcon2.png')} />
          <Picker
            style={styles.pickerWrapper}
            selectedValue={selectedCompanyType}
            onValueChange={(itemValue) => setSelectedCompanyType(itemValue)}
          >
            <Picker.Item
              style={{ fontSize: 12, color: '#78909c' }}
              key="Choose Company Type"
              label="Choose Company Type"
              value="companyType"
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
          // changeIcon={_changeIcon}
        />
        <View style={styles.loginBack}>
          <Text style={styles.textStyle}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
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
