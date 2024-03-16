import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Home } from "./src/screens/Home/Home";


export default function App() {
  return (
    <>
     <StatusBar style='auto' />
     <Home/>
    </>
  )
};