import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { CategoriesScreen } from '../screens/categories/CategoriesScreen';
const Stack = createStackNavigator();

export const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
  }}>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};
