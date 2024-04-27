import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const UR = () => {
  const [selectedUser, setSelectedUser] = useState("user1");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <View style={styles.con}>
    <View style={styles.container}>
      <Text style={styles.title}>User Rights</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Branch Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the branch name"
            placeholderTextColor="#7f8c8d"
          />
        </View>

       <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          {/* Basic dropdown */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedUser}
              onValueChange={(itemValue) => setSelectedUser(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="User1" value="user1" />
              <Picker.Item label="user2" value="user2" />
            </Picker>
          </View>
        </View>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginLeft:50
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginBottom: hp('5%'),
  },
  formContainer: {
    width: wp('80%'),
    backgroundColor: '#ffffff',
    padding: wp('5%'),
    borderRadius: wp('2%'),
  },
  inputGroup: {
    marginBottom: hp('3%'),
  },
  label: {
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: wp('1%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    fontSize: hp('2%'),
    color: '#333333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: wp('1%'),
    marginBottom: hp('1%'),
  },
  picker: {
    height: hp('5%'),
    width: '100%',
    fontSize: hp('2%'),
    color: '#333333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: wp('1%'),
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  con:{
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
marginTop:hp('5%'),
paddingTop:50
  },
});

export default UR;
