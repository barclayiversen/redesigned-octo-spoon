// iOS
//import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText='Albums' />
    <AlbumList />
  </View>

  );

//Render it
AppRegistry.registerComponent('albums', () => App);