import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TrackingScreen from './Components/TrackingScreen';
import TS from './Components/TS';
import MyForm from './Components/MyForm';
import MF from './Components/MF';
import UserRightScreen from './Components/UserRightScreen';
import UR from './Components/UR';
import Demo from './Components/demo1';
import MFDemo from './Components/MFDemo';


export default function App() {
  return (
    <View >
      <ScrollView>
      <Text>
      {/* //for learnong only */}
      {/* <Demo/> */}
      {/* <MFDemo/> */}
      
     <UserRightScreen/>
     <TrackingScreen/>
     {/* <MF/> */}

    </Text>
     </ScrollView>
    </View>
  );
}


