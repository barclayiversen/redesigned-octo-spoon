//android

//import a library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a Component
const App = () => (
    <Header headerText='Albums' />
  );

//Render it
AppRegistry.registerComponent('albums', () => App);
