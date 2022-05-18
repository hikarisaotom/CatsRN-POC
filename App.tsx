import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { TabsNavigator } from './src/navigators/TabsNavigator';
import { PricipalNavigator } from './src/navigators/PricipalNavigator';


const App = () => {
  return (
    <NavigationContainer >
     {/* <PrincipalStackNavigator/> */}
     {/* <TabsNavigator/> */}
     {/* <SlidesScreen/> */}
     <PricipalNavigator/>
      </NavigationContainer>
  )
}


export default App
