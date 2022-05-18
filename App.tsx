import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { TabsNavigator } from './src/navigators/TabsNavigator';


const App = () => {
  return (
    <NavigationContainer >
      <TabsNavigator />
      </NavigationContainer>
  )
}


export default App
