import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import Employee from '../services/Employee';
import  { useState, useEffect } from 'react';


const MFDemo = () => {
  const [branchName, setBranchName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [selectedValue, setSelectedValue] = useState('item0');
  const [stopValue, setStopValue] = useState(null);
  const [searchId, setSearchId] = useState('');

  const [rows, setRows] = useState([]);

  const items = [
    { label: 'Select', value: 'item0' },
    { label: 'Cargo Custodian', value: 'item1' },
    { label: 'Cargo Gate', value: 'item2' },
    { label: 'Cargo Official', value: 'item3' },
    { label: 'SEEPZ Custodian', value: 'item4' },
    { label: 'SEEPZ Gate', value: 'item5' },
    { label: 'SEEPZ Official ', value: 'item6' },
    { label: 'SEEPZ Vault', value: 'item7' },
    { label: 'Unit/Party', value: 'item8' },
  ];

  const stopItem = [
    { label: 'Select', value: 'item0' },
    { label: 'Yes', value: 'item1' },
    { label: 'No', value: 'item2' },
  ];



  useEffect(() => {
    Employee.getEmployee()
      .then((res) => {
        // Handle the response here
        console.log('Employee data:', res);
      })
      .catch((error) => {
        // Handle error if the promise is rejected
        console.error('Error fetching employee data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render



  const handleReset = () => {
    setBranchName('');
    setUserId('');
    setUserPassword('');
    setUserName('');
    setUserEmail('');
    setUserMobile('');
    setSelectedValue('item0');
    setStopValue('item0');
    setSearchId('');
  };

  const handleSearch = () => {
    // Implement your search logic here based on the searchId state
    console.log('Searching for ID:', searchId);
  };

  const handleSubmit = () => {
    if (!branchName || !userId || !userPassword || !userName || !userEmail || !userMobile || !selectedValue || !stopValue) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      // Create a new row object with the form data
      const newRow = {
        id: rows.length + 1,
        userId: userId,
        branch: branchName,
        email: userEmail,
        mobile: userMobile,
        st: stopValue,
        name: userName,
        ut: selectedValue,
      };
  
      // Add the new row to the rows state array
      setRows([...rows, newRow]);
  
      // Reset the form fields
      setBranchName('');
      setUserId('');
      setUserPassword('');
      setUserName('');
      setUserEmail('');
      setUserMobile('');
      setSelectedValue('item0');
      setStopValue(null);
  
      // Inform user that the form has been submitted
      Alert.alert('Success', 'Form submitted successfully!');
    }
  };
  
 




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/userLogo.jpg")} style={styles.image} />
        <Text style={styles.headerText}>User Creation</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputRow}>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>Branch Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Branch Name"
              value={branchName}
              onChangeText={(text) => setBranchName(text)}
            />
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>User Id:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your ID"
              value={userId}
              onChangeText={(text) => setUserId(text)}
            />
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>User Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={userPassword}
              onChangeText={(text) => setUserPassword(text)}
            />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>User Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              keyboardType="email-address"
              value={userEmail}
              autoCapitalize='none'
              onChangeText={(text) => setUserEmail(text)}
            />
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>Mobile No:</Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile No"
              keyboardType="phone-pad"
              value={userMobile}
              onChangeText={(text) => setUserMobile(text)}
            />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputColumn}>
            <Text style={styles.label}>User Type:</Text>
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
          <View style={styles.inputColumn}>
            <Text style={styles.label}>Stop Transaction:</Text>
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { borderColor: 'green' }]} onPress={handleSubmit}>
            <Image source={require("../assets/submit.jpg")} style={styles.image} />
            <Text style={styles.buttonTextS}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { borderColor: 'red' }]} onPress={handleReset}>
            <Image source={require("../assets/reset.jpg")} style={styles.image} />
            <Text style={styles.buttonTextR}>Reset</Text>
          </TouchableOpacity>
        </View>



        {/* Search Section */}
        <View style={styles.searchC}>
        <View style={styles.inputRow}>
          <View style={styles.inputColumn}>
            <Text style={styles.Text}>Search In List Data</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Enter your ID for searching"
                value={searchId}
                onChangeText={(text) => setSearchId(text)}
              />
              <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Text style={styles.buttonTextS}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.buttonTextR}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View>
        <Row
                data={['Branch Name', 'User Id', 'User Name', 'User Type', 'Stop Transaction', 'Comments', 'Status', 'Action']}
                style={styles.head}
                textStyle={styles.text1}
              />

<TableWrapper  style={[styles.row, styles.rowShadow]}>
                  <Cell data={"1"} textStyle={styles.text} />
                  <Cell data={"2"} textStyle={styles.text} />
                  <Cell data={"3"} textStyle={styles.text} />
                  <Cell data={"4"} textStyle={styles.text} />
                  <Cell data={"5"} textStyle={styles.text} />
                  <Cell data={'-'} textStyle={styles.text} />
                  <Cell data={'Approved'} textStyle={styles.text} />
                  <Cell
                    data={
                      <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.button} >
                          <Image source={require('../assets/edit.png')} style={styles.buttonImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                          <Image source={require('../assets/delete.png')} style={styles.buttonImage} />
                        </TouchableOpacity>
                      </View>
                    }
                  />
                </TableWrapper>
        </View>

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  image: {
    width: 30,
    height: 30,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    marginBottom: hp('2%'),
  },
  headerText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  Text: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  formContainer: {
    borderWidth: 1,
    borderRadius: wp('1%'),
    borderColor: 'grey',
    padding: wp('3%'),
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  inputColumn: {
    flex: 1,
    marginRight: wp('2%'),
  },
  input: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: wp('1%'),
  },
  picker: {
    marginBottom: hp('2%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: wp('1%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: wp('1%'),
    width: wp('40%'),
  },
  buttonTextR: {
    color: 'red',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  buttonTextS: {
    color: 'green',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  label: {
    marginTop: hp('1%'),
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  searchInput: {
    flex: 1,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    marginRight: 10,
    borderWidth: 1,
    borderRadius: wp('1%'),
    borderColor: 'grey',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: wp('1%'),
    padding: 10,
    borderBlockColor: 'green',
    borderRadius: 5,
    marginRight:20,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: wp('1%'),
    padding: 10,
    borderBlockColor: 'red',
    borderRadius: 5,
    marginRight:20,
  },
  inputS: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    // borderWidth: 1,
    // borderColor: 'grey',
    // borderRadius: wp('1%'),
  },
  searchC:{
    marginTop:60,
    borderWidth: 1,
    borderRadius: wp('1%'),
    borderColor: 'grey',
    padding: wp('3%'),
  },



  head: { height: 40, backgroundColor: '#90EE90' },
  text1: { margin: 6, textAlign: 'center', width: 150, fontWeight: 'bold' },
  text: { margin: 6, textAlign: 'center', width: 150, height: 40, alignContent: 'center' },


   //css for the table component
   containerT: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
   shadow: {
     backgroundColor: '#fff',
     elevation: 5,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 4,
   },
   head: { height: 40, backgroundColor: '#90EE90' },
   text1: { margin: 6, textAlign: 'center', width: 150, fontWeight: 'bold' },
   text: { margin: 6, textAlign: 'center', width: 150, height: 40, alignContent: 'center' },
   row: { flexDirection: 'row' },
   rowShadow: {
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 4,
     elevation: 5,
     backgroundColor: '#fff',
     marginBottom: 10,
   },
   actionButtons: { flexDirection: 'row', justifyContent:'space-evenly',},
   button: { margin: 5, padding: 10 },
   buttonImage: { width: 24, height: 24 },
   buttonContainer: { flexDirection: 'row', alignItems: 'center' },
   buttonText: { marginLeft: 5 },
   searchContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
   searchInListText: { marginBottom: 10, fontSize: 16, fontWeight: 'bold' },
   searchInput: {
     flex: 1,
     borderWidth: 1,
     borderRadius: hp('1%'),
     paddingVertical: hp('1.7%'),
     paddingHorizontal: wp('1%'),
     fontSize: hp('2%'),
     marginRight: 10,
   },
   errorInput: { borderColor: 'red' },
   successInput: { borderColor: 'green' },
   searchButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 4 },
   resetButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 4 },
   errorText: { color: 'red', marginTop: 5 },
});

export default MFDemo;
