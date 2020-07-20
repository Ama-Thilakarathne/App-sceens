import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
//import {Home} from './screens/Home'
//import Home from './screens/Home'
import EditUser from './screens/EditUser'

export default function App() {
  return (
    <View style={styles.container}>
      <EditUser />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    marginTop:Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
