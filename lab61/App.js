import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './lab61/DrawerNavigator';
import DetailsScreen from './lab61/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        {/* Drawer Navigator */}
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
        
        {/* Stack Screen for Details */}
        <Stack.Screen 
          name="DetailsStack" 
          component={DetailsScreen} 
          options={{ title: 'Detail Information' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}