import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Picker } from '@react-native-picker/picker';


const MyForm = () => {
  const [branchName, setBranchName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [selectedValue, setSelectedValue] = useState();
  const [stopValue, setStopValue] = useState();



  //Using Picker 
  const items = [
    { label: 'Select', value: 'item0' },
    { label: 'Cargo Custodian', value: 'item1' },
    { label: 'Cargo Gate', value: 'item2' },
    { label: 'Cargo Official', value: 'item3' },
    { label: 'SEEPZ Custodian', value: 'item4' },
    { label: 'SEEPZ Gate', value: 'item5' },
    { label: 'SEEPZ Offficial ', value: 'item6' },
    { label: 'SEEPZ Vault', value: 'item7' },
    { label: 'Unit/Party', value: 'item8' },
  ];

  const stopItem = [
    { label: 'Select', value: 'item0' },
    { label: 'Yes', value: 'item1' },
    { label: 'No', value: 'item2' },
  ]

  const handleReset = () => {
    setBranchName('');
    setUserId('');
    setUserPassword('');
    setUserName('');
    setUserEmail('');
    setUserMobile('');
    setSelectedValue(null);
    setStopValue(null);
  };


  const handleSubmit = () => {
    if (!branchName || !userId || !userPassword || !userName || !userEmail || !userMobile || !selectedValue || !stopValue) {
      // Check if any field is empty
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      // Add your submission logic here
      console.warn('Form Submitted!');
    }
  };


  return (
    <View>
      <ScrollView style={styles.main}>
        <View></View>
        <View style={styles.container3}>
          {/* <Image source={require("../assets/userLogo.png")} style={styles.image} /> */}
          <Text style={styles.text}>User Creation</Text>
        </View>

        <View style={{ borderWidth: 1, margin: 9, borderRadius: 10, borderColor: 'grey', height: '100%' }}>
          <View style={{ padding: 20 }}>
            <View style={styles.spaceAbove}></View>

            <Text>Branch Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Branch Name"
              value={branchName}
              onChangeText={(text) => setBranchName(text)}
            />
            

            <Text>User Id:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your ID"
              value={userId}
              onChangeText={(text) => setUserId(text)}
            />

            <Text>User Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={userPassword}
              onChangeText={(text) => setUserPassword(text)}
            />

            <Text>User Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />

            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              keyboardType="email-address"
              value={userEmail}
              autoCapitalize='none'
              onChangeText={(text) => setUserEmail(text)}
            />

            <Text>Mobile No:</Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile No"
              keyboardType="phone-pad"
              value={userMobile}
              onChangeText={(text) => setUserMobile(text)}
            />
            <View style={styles.containerx}>
              <Text style={styles.label}>User Type:</Text>
              <View style={styles.row}>

                <Text style={styles.dash}>-</Text>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(value) => setSelectedValue(value)}
                  style={styles.picker}
                >
                  {items.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                  ))}
                </Picker>
              </View>
              <Text style={styles.label}>Stop Transaction:</Text>
              <View style={styles.row}>

                <Text style={styles.dash}>-</Text>
                <Picker
                  selectedValue={stopValue}
                  onValueChange={(value) => setStopValue(value)}
                  style={styles.picker}
                >
                  {stopItem.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                  ))}
                </Picker>
              </View>
            </View>



            <View style={styles.container1}>
              <TouchableOpacity style={[styles.button, { borderColor: 'green' }]} onPress={handleSubmit}>
                {/* <Image source={require("../assets/right.png")} style={styles.buttonImage} /> */}
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>

              <Text></Text>

              <TouchableOpacity style={[styles.button, { borderColor: 'red' }]} onPress={handleReset}>
                {/* <Image source={require("../assets/reset2.png")} style={styles.buttonImage} /> */}
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,

  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    padding: 5,
    fontWeight: 'bold'

  },

  input: {
    height: 50,
    width: '100%',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    color: '#333',
  },
  containerx: {
    flex: 1,
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    height: '25%',

  },
  label: {
    fontSize: 16,
    marginBottom: 10, // Add margin below the label for spacing
  },
  dash: {
    fontSize: 0,
  },
  picker: {
    flex: 1,
  },
  container1: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 120,
    //marginTop:-10
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  image: {
    width: 30,
    height: 30,
    margin: 15,


  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default MyForm;

