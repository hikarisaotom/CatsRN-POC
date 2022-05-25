import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {PricipalNavigator} from './src/navigators/PricipalNavigator';
import {requestUserPermission,notificationListener} from './src/utils/notificationService';

const App = () => {
  useEffect(() => {
    requestUserPermission()
    notificationListener()
  }, []);

  return (
    <NavigationContainer>
      {/* <PrincipalStackNavigator/> */}
      {/* <TabsNavigator/> */}
      {/* <SlidesScreen/> */}
      <PricipalNavigator />
    </NavigationContainer>
  );
};

export default App;
