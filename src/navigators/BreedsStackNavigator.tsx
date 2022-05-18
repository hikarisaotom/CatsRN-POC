import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BreedsScreen} from '../screens/breeds/BreedsScreen';
const Stack = createStackNavigator();

export const BreedsStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
  }}>
      <Stack.Screen name="BreedsScreen" component={BreedsScreen} />
    </Stack.Navigator>
  );
};
