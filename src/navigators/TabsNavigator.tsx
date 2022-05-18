import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImagesScreen } from '../screens/ImagesScreen';
import { BreedsStackNavigator } from './BreedsStackNavigator';
import { CategoriesStackNavigator } from './CategoriesStackNavigator.';
import React from 'react';
const Tab = createBottomTabNavigator();

export const  TabsNavigator=()=> {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Breeds" component={BreedsStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator} />
      <Tab.Screen name="Images" component={ImagesScreen} />
    </Tab.Navigator>
  );
}