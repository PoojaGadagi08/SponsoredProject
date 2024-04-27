import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TrackingService from '../services/TrackingService';
// import axios from 'axios';

const TrackingScreen = () => {



  const [igmNo, setIgmNo] = useState('');
  const [item, setItem] = useState('');
  const [blNo, setBlNo] = useState('');
  const [containerNo, setContainerNo] = useState('');



  //fetch the data
  const [track, trackit] = useState([])

  // useEffect(() => {
  //   trackData()
  // }, [])

  // const trackData = () => {

  //   // TrackingService.trackData().then((response) => {
  //   //     trackit(response.data)
  //   //     console.log(response.data);
  //   // });
  // };


  // const handleSearch = () => {
  //   if (!(igmNo || blNo || containerNo)) {
  //     alert('Please fill in at least one of IGM No, BL No, or Container No');
  //     return;
  //   }
  //   if (!item) {
  //     alert('Please fill in the Item field');
  //     return;
  //   }
  //   axios.get(`http://localhost:8080/search?query=${query}`)
  //   .then(response => {
  //     trackit(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error searching data:', error);
  //   });
  // };

  const handleSearch = () => {
    if (!(igmNo || blNo || containerNo)) {
      alert('Please fill in at least one of IGM No, BL No, or Container No');
      return;
    }
    if (!item) {
      alert('Please fill in the Item field');
      return;
    }

    // // Filter the track array based on IGM No
    // const filteredTrack = track.filter(row => row.Igm_no.includes(igmNo) );

    // // Update the track state with filtered results
    // trackit(filteredTrack);
    

    TrackingService.searchData(igmNo,containerNo).then((response) => {
      trackit(response.data)
    }).catch(error => {
      console.log(error);
    })
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
        <View style={styles.column}>
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

        <View style={styles.column}>
          <Text style={styles.box}>ITEM</Text>
          <TextInput
            style={styles.input}
            value={item}
            onChangeText={setItem}
            placeholder="Enter Item"
          />
        </View>
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

      <View style={styles.buttonContainer}>
        <View style={{ paddingHorizontal: 200 }}></View>
        <TouchableOpacity style={[styles.button, styles.button2]} onPress={handleSearch}>
          <Image source={require("../assets/check.png")} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Image source={require("../assets/undo.png")} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 200 }}></View>
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
          {
            track.map(
              (row, index) =>
                <View style={styles.tableRow} key={index}>
                  {/* Render your data here */}
                  <Text style={styles.cell}>{index + 1}</Text>
                  <Text style={styles.cell}>{row.Igm_no}</Text>
                  <Text style={styles.cell}>{row.IGM_Line_No}</Text>
                  <Text style={styles.cell}>{row.Container_No}</Text>
                  <Text style={styles.cell}>{row.Container_Size}</Text>
                  <Text style={styles.cell}>{row.Container_Type}</Text>
                  <Text style={styles.cell}>{row.Gate_In_Date}</Text>
                  <Text style={styles.cell}>{row.Hold_Status}</Text>
                  <Text style={styles.cell}>{row.Scanner_Type}</Text>
                  <Text style={styles.cell}>Pune</Text>
                  <Text style={styles.cell}>ONE(Ocean Network Express) LINE (INDIA)PVT LTD</Text>
                </View>
            )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'web' ? 50 : 100,
    padding: 20,
    marginLeft: 90
  },
  headline: {
    fontSize: Platform.OS === 'web' ? 24 : 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
    marginBottom: 40,
    fontSize: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,

  },
  column: {
    flex: 1,
    flexDirection: 'row',

  },
  input: {
    borderWidth: 1,
    borderColor: '#1e90ff',
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 5,
    height: 50,
    fontSize: 16,
    width: wp('30%'),

  },
  box: {
    backgroundColor: '#1e90ff',
    height: 50,
    width: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    padding: 10,
    paddingTop: 15
  },
  or: {
    alignSelf: 'flex-start',
    color: 'red',
    padding: 5,
    marginBottom: 5,
    marginLeft: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 120,
    // backgroundColor: 'red',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  button2: {
    // backgroundColor: 'forestgreen',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    borderColor:'green'
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    // color: 'white',
    fontSize: 16,
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

export default TrackingScreen;
