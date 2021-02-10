import { StatusBar } from 'expo-status-bar';
import React from 'react';
import IndexScreen from './src/screens/IndexScreen'

export default function App() {
  window.addEventListener = x => x;
  return (
    <IndexScreen />
  );
}
