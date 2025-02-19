import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './lab7/BottomTabNavigator'; // Import đúng đường dẫn

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
