import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'; 
import store from './src/redux/Store';
import { Navigation } from './src/navigation/Index'; 

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation /> 
      </NavigationContainer>
    </Provider>
  );
};
