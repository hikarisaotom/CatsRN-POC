import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { CategoriesScreen } from '../screens/categories/CategoriesScreen';
import { CategoryDetails } from '../screens/categories/categoryDetails';
import { Category } from '../interfaces/cats';
export type RootCategoriesParams={
  CategoriesScreen:undefined;
  CategoryDetails:Category;
}
const Stack = createStackNavigator<RootCategoriesParams>();

export const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white'
      }
  }}>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />

    </Stack.Navigator>
  );
};
