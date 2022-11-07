import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CounterClass } from './src/components/counterClass';
import { FunctionCounter } from './src/components/counterFunction';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterClass />
      <FunctionCounter />
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
