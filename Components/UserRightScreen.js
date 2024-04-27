import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';

const UserRightScreen = () => {
  const initialState = new Array(5).fill(null).map(() => new Array(5).fill(false));
  const [checkboxStates, setCheckboxStates] = useState(initialState);
  const [branchName, setBranchName] = useState('');
  const [stopValue, setStopValue] = useState(null);
  const [searchId, setSearchId] = useState('');

  const stopItem = [
    { label: 'Select', value: 'item0' },
    { label: 'Pooja', value: 'item1' },
    { label: 'Vaibhav', value: 'item2' },
    { label: 'Ruturaj', value: 'item3' },
    { label: 'Mrunal', value: 'item4' },
    { label: 'Vaishanvi', value: 'item5' },
    { label: 'Shrisha', value: 'item6' },
    { label: 'Ram', value: 'item7' },
  ];

  const toggleCheckbox = (row, col) => {
    const updatedStates = checkboxStates.map((checkboxRow, rowIndex) =>
      rowIndex === row ? checkboxRow.map((item, colIndex) => colIndex === col ? !item : item) : [...checkboxRow]
    );
    setCheckboxStates(updatedStates);
  };

  const handleSearch = () => {
    // Implement your search logic here based on the searchId state
    console.log('Searching for ID:', searchId);
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
            <Text style={styles.label}>Branch Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Branch Name"
              value={branchName}
              onChangeText={(text) => setBranchName(text)}
            />
          </View>
          <View style={styles.inputColumn}>
            <Text style={styles.label}>User Name:</Text>
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
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeader, styles.firstColumn]}>Parent Menu Process</Text>
            <View style={styles.columnGroup}>
              {[...Array(5)].map((_, index) => (
                <Text key={index} style={[styles.tableHeader, styles.tableCell]}>{`Option ${index + 1}`}</Text>
              ))}
            </View>
          </View>
          {checkboxStates.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              <View style={styles.firstColumn}>
                <Text style={styles.tableCell}>{`Item ${rowIndex + 1}`}</Text>
              </View>
              <View style={styles.columnGroup}>
                {row.map((checked, colIndex) => (
                  <View key={colIndex} style={styles.tableCell}>
                    <CheckBox
                      isChecked={checked}
                      onClick={() => toggleCheckbox(rowIndex, colIndex)}
                    />
                  </View>
                ))}
              </View>
            </View>
          ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  headerText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    paddingLeft: hp('1%'),
  },
  label: {
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
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('1%'),
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: hp('1%'),
    marginTop: hp('1%'),
    fontSize: hp('2%'),
    width: wp('35%')
  },
  picker: {
    paddingVertical: hp('1.7%'),
    paddingHorizontal: wp('1%'),
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: hp('1%'),
    fontSize: hp('2%'),
    width: wp('35%')
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: hp('1%'),
    padding: 10,
    paddingHorizontal: 30,
    paddingTop: 10,
    marginHorizontal: wp('2%'),
    backgroundColor: 'lightgreen',
    width: 80, // Adjust width to match input box
  },
  buttonText: {
    color: 'green',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  tableContainer: {
    marginTop: hp('2%'),
    borderWidth: 1,
    borderRadius: wp('1%'),
    borderColor: 'grey',
    padding: wp('3%'),
  },
  table: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  tableHeader: {
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'lightgreen',
    padding: 20,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  tableCell: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  firstColumn: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  columnGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default UserRightScreen;