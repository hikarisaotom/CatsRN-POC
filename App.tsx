import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'

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


