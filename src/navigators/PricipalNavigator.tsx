import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { SlidesScreen } from '../screens/introductioSlides';
import { TabsNavigator } from './TabsNavigator';
const Stack = createStackNavigator();

export const PricipalNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            }
        }}
    >
     <Stack.Screen name="TabsNavigatorHomeScreen" component={ TabsNavigator } />
     <Stack.Screen name="InitialHomeScreen" component={ SlidesScreen } />

    </Stack.Navigator>
  );
}