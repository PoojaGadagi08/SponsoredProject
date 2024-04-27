import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TS = () => {
  const [igmNo, setIgmNo] = useState('');
  const [item, setItem] = useState('');
  const [blNo, setBlNo] = useState('');
  const [containerNo, setContainerNo] = useState('');

  const handleSearch = () => {
    if (!(igmNo || blNo || containerNo)) {
      alert('Please fill in at least one of IGM No, BL No, or Container No');
      return;
    }
    if (!item) {
      alert('Please fill in the Item field');
      return;
    }
    console.log('Search button clicked');
  };

  const handleReset = () => {
    setIgmNo('');
    setItem('');
    setBlNo('');
    setContainerNo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Online Container Tracking System</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.box}>IGM NO</Text>
        <TextInput
          style={styles.input}
          value={igmNo}
          onChangeText={(text) => {
            if (/^\d*$/.test(text)) {
              setIgmNo(text);
            }
          }}
          placeholder="Enter IGM No"
        />
      </View>

      <Text style={styles.or}>OR</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.box}>BL NO</Text>
        <TextInput
          style={styles.input}
          value={blNo}
          onChangeText={(text) => {
            if (/^\d*$/.test(text)) {
              setBlNo(text);
            }
          }}
          placeholder="Enter BL No"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.or}>OR</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.box}>CONTAINER NO</Text>
        <TextInput
          style={styles.input}
          value={containerNo}
          onChangeText={setContainerNo}
          placeholder="Enter Container No"
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.box}>Item</Text>
        <TextInput
          style={styles.input}
          value={item}
          onChangeText={setItem}
          placeholder="Enter Item"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.button2]} onPress={handleSearch}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          {/* Heading Row */}
          <View style={[styles.tableRow, styles.headingRow]}>
            <Text style={styles.headingText}>Sr No</Text>
            <Text style={styles.headingText}>IGM NO</Text>
            <Text style={styles.headingText}>Item No</Text>
            <Text style={styles.headingText}>Container No</Text>
            <Text style={styles.headingText}>Size</Text>
            <Text style={styles.headingText}>Type</Text>
            <Text style={styles.headingText}>Gate In</Text>
            <Text style={styles.headingText}>Hold State</Text>
            <Text style={styles.headingText}>Scanning Type</Text>
            <Text style={styles.headingText}>Location</Text>
            <Text style={styles.headingText}>Shipping Line</Text>
          </View>

          {/* Information Row */}
          <View style={styles.tableRow}>
            {/* Render your data here */}
            <Text style={styles.cell}>1</Text>
            <Text style={styles.cell}>IGM123</Text>
            <Text style={styles.cell}>123</Text>
            <Text style={styles.cell}>C123</Text>
            <Text style={styles.cell}>20ft</Text>
            <Text style={styles.cell}>Type A</Text>
            <Text style={styles.cell}>Gate 1</Text>
            <Text style={styles.cell}>On Hold</Text>
            <Text style={styles.cell}>Barcode</Text>
            <Text style={styles.cell}>Location A</Text>
            <Text style={styles.cell}>Shipping Co.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: wp('10%'),
    height:hp('100%'),
    width:wp('100%'),
    fontSize: hp('5%'),
  },
  headline: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
    marginBottom: 40,
    fontSize: hp('5%'),
    fontSize: wp('5%'),
    marginBottom: hp('2%'),
  },
  inputContainer: {
    marginBottom: hp('2%'),
    flexDirection: 'row',
  alignItems: 'center',

  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: wp('1%'),
    flex: 1,
    borderWidth: 1,
    borderColor: '#1e90ff',
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  box: {
    paddingTop: hp('1.5%'),
     backgroundColor: '#1e90ff',
    width: 150,
    height: 50,
    textAlign: 'center',
    // textAlignVertical: 'center',
    borderRadius: 5,
    color: 'white',
    fontSize:16
  },
  or: {
    alignSelf: 'center',
    paddingTop: hp('0.8%'),
    color: 'red',
    // padding: 5,
    paddingTop:1
  },
  item: {
    marginBottom: hp('2%'),
    flexDirection: 'row',
  alignItems: 'center',
  },
  buttonContainer: {
    // marginBottom: hp('2%'),

    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding:10,
    // width: '10%',
    // marginTop: 20,
  },
  button: {
    padding: wp('1%'),
    borderRadius: wp('1%'),
    width: wp('20%'),

    // flexDirection: 'row',
    // justifyContent: 'flex-start',
   textAlign:'center',
   
    // marginBottom: 10,
    // width: 220,
    backgroundColor: 'red',
    // Add shadow properties
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10, // This is for Android to show elevation/shadow
  },
  button2: {
    backgroundColor: 'forestgreen',
    // Add shadow properties
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10, // This is for Android to show elevation/shadow
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
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
    // flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    // flex: 1,
    textAlign: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

export default TS;
