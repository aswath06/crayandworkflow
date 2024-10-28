import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Navigation} from './src/navigation/Index';

const Stack = createNativeStackNavigator();

export const App = () => {
  return <Navigation />;
};
