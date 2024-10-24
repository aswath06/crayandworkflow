import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProjectInfo from './src/screens/ProjectInfo';
import TaskDetails from './src/components/TaskDetails';
import WireframesPage from './src/screens/WireframesPage';
import {Navigation} from './src/navigation/Index';

const Stack = createNativeStackNavigator();

export const App = () => {
  return <Navigation />;
};
