import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectInfo from '../screens/ProjectInfo';
import Taskdetails from '../components/TaskDetails';
import WireframesPage from '../screens/WireframesPage';
import DocumentPage from '../screens/Documents';
import Filepage from '../screens/FilePage';

const Stack = createNativeStackNavigator(); 

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProjectInfo">
      <Stack.Screen
        name="ProjectInfo"
        component={ProjectInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={Taskdetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wireframes"
        component={WireframesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DocumentPage"
        component={DocumentPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filepage"
        component={Filepage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
