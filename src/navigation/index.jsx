import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProjectInfo from '../screens/ProjectInfo';
import Taskdetails from '../components/TaskDetails';
import WireframesPage from '../screens/WireframesPage';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProjectInfo">
        <Stack.Screen
          name="ProjectInfo"
          component={ProjectInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskDetails"
          component={Taskdetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wireframes"
          component={WireframesPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
