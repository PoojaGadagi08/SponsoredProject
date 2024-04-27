import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Employee from '../services/Employee';

const Demo = () => {  

  const [branchName, setBranchName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [selectedValue, setSelectedValue] = useState('item0');
  const [stopValue, setStopValue] = useState(null);
  const [searchId, setSearchId] = useState('');

  // For adding row in table
  const [rows, setRows] = useState([]);


  const items = [
    { label: 'Select', value: 'item0' },
    { label: 'Cargo Custodian', value: 'Cargo Custodian' },
    { label: 'Cargo Gate', value: 'Cargo Gate' },
    { label: 'Cargo Official', value: 'Cargo Official' },
    { label: 'SEEPZ Custodian', value: 'SEEPZ Custodian' },
    { label: 'SEEPZ Gate', value: 'SEEPZ Gate' },
    { label: 'SEEPZ Official ', value: 'SEEPZ Official' },
    { label: 'SEEPZ Vault', value: 'SEEPZ Vault' },
    { label: 'Unit/Party', value: 'Unit/Party' },
  ];

  const stopItem = [
    { label: 'Select', value: 'item0' },
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
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
        console.warn('Form Submitted!');
        handleAddRow({
            id: rows.length + 1,
            userId: userId,
            srno: rows.length + 1,
            branch: branchName,
            email: userEmail,
            mobile: userMobile,
            st: stopValue,
            name: userName,
            ut: selectedValue,
        });
        Employee.createEmployee({
          srNo: rows.length + 1,
          userId: userId,
          branchName: branchName,
          email: userEmail,
          mobileNo: userMobile,
          stopTransaction: stopValue,
          userName: userName,
          userType: selectedValue,
        
        
        }).then(res => {
            // Handle response if needed
        }).catch(error => {
            console.error('Error occurred while creating employee:', error);
        });
    }
};


  const handleAddRow = () => {
    // Create a new row object with initial values
    const newRow = {
      id: rows.length + 1,
      userId: userId, // Set the userId directly
      srno: rows.length + 1,
      branch: branchName, // Set the branchName directly
      email: userEmail, // Set the userEmail directly
      mobile: userMobile, // Set the userMobile directly
      st  : stopValue, // Set the stopValue directly
      name: userName, // Set the userName directly
      ut: selectedValue, // Set the selectedValue directly
    };
    // Add the new row to the rows state array
    setRows([...rows, newRow]);
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

      </View>

      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          {/* Heading Row */}
          <View style={[styles.tableRow, styles.headingRow]}>
            <Text style={styles.headingText}>User Id</Text>
            <Text style={styles.headingText}>Sr No</Text>
            <Text style={styles.headingText}>Branch Name</Text>
            <Text style={styles.headingText}>Email</Text>
            <Text style={styles.headingText}>Mobile No</Text>
            <Text style={styles.headingText}>Stop Transaction</Text>
            <Text style={styles.headingText}>User Name</Text>
            <Text style={styles.headingText}>User Type</Text>
          </View>

          {/* Information Row */}
          {
            rows.map(row =>
              <View style={styles.tableRow} key={row.id}>
                <TextInput
                  style={styles.cell}
                  placeholder="Sr No"
                  value={row.srno}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, srno: text };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="Branch Name"
                  value={row.branch}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, branch: text };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="User Id"
                  value={row.userId}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, userId: text };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="User Name"
                  value={row.name}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, name: text };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="Email"
                  value={row.email}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, email: text };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="Mobile No"
                  value={row.mobile}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, mobile: text };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="User Type"
                  value={row.ut}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, ut: selectedValue };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
                <TextInput
                  style={styles.cell}
                  placeholder="Stop Transaction"
                  value={row.st}
                  onChangeText={(text) => {
                    const updatedRows = rows.map(r => {
                      if (r.id === row.id) {
                        return { ...r, st: stopValue };
                      }
                      return r;
                    });
                    setRows(updatedRows);
                  }}
                />
              </View>
            )
          }
        </View>
      </ScrollView>
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
  tableContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 50
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headingRow: {
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 2,
  },
  headingText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
    width: 120,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
    width: 120,
  },
});

export default Demo;
