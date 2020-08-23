import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideMoveBlockContainer from './SideMoveBlock'

export default function App() {
  return (
      <SideMoveBlockContainer x = {140}  y = {300} d = {175} size = {90}>
      </SideMoveBlockContainer>
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
