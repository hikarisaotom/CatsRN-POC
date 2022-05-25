import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SlidesScreen} from '../screens/introductioSlides';
import {TabsNavigator} from './TabsNavigator';
import { LateralMenu } from './LateralMenu';

const Stack = createStackNavigator();

export const PricipalNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
   
   {/* <Stack.Screen name="TabsNavigatorHomeScreen" component={ LateralMenu } /> */}
   <Stack.Screen name="InitialHomeScreen" component={SlidesScreen} />
      <Stack.Screen name="TabsNavigatorHomeScreen" component={ TabsNavigator } />
    </Stack.Navigator>
  );
};
