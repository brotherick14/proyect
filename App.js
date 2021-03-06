import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Likebuck, Home,Logo,Like} from './Svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Likebuck style={{width: 100, height: 100}}/>
      <Logo style={{width: 100, height: 100}}/>
      <Home style={{width: 100, height: 100}}/>
      <Like style={{width: 100, height: 100}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
