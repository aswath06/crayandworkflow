import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProjectInfo from './src/screens/projectinfo';
import TaskDetails from './src/components/taskdetails';
import WireframesPage from './src/screens/WireframesPage';
import {Navigation} from './src/navigation';

const Stack = createNativeStackNavigator();

export const App = () => {
  return <Navigation />;
};
