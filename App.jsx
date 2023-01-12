/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


import styled from 'styled-components';
import Navigation from './Navigation';
import { pixelSizeHorizontal, pixelSizeVertical } from './normalize';

//` `

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <Navigation/>
    </SafeAreaView>
  );
};

export default App;
