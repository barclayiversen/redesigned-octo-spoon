//android

//import a library to help create Component
import React from 'react';
import ReactNative from 'react-native';


//create a Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};


//Render it
ReactNative.AppRegistry.registerComponent('albums', () => App);
