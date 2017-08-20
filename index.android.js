//android

//import a library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create a Component
const App = () => (
  <View>
    <Header headerText='Albums' />
    <AlbumList />
  </View>

  );

//Render it
AppRegistry.registerComponent('albums', () => App);
