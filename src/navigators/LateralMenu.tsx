import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { LogInScreen } from '../screens/LogInScreen';

const Drawer = createDrawerNavigator();

export const LateralMenu=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={TabsNavigator} />
      <Drawer.Screen name="LogIn/LogOut" component={LogInScreen} />
    </Drawer.Navigator>
  );
}