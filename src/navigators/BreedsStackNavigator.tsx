import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Cat } from '../interfaces/cats';
import { BreedDetails } from '../screens/breeds/BreedDetails';
import {BreedsScreen} from '../screens/breeds/BreedsScreen';


/**HERE**/
/*TO SEND PARAMS WITH THE NAVIGATOR*/
export type RootStackParams={
  BreedsScreen:undefined;
  BreedDetails:Cat;
}
const Stack = createStackNavigator<RootStackParams>();

export const BreedsStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
  }}>
      <Stack.Screen name="BreedsScreen" component={BreedsScreen} />
      <Stack.Screen name="BreedDetailsScreen" component={BreedDetails} />
    </Stack.Navigator>
  );
};
