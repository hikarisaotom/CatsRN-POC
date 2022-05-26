import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {PricipalNavigator} from './src/navigators/PricipalNavigator';
import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationService';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <NavigationContainer>
      <AppState>
      <PricipalNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
