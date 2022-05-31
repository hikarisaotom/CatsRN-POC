import Icon from 'react-native-vector-icons/Ionicons';
import React, {useContext} from 'react';
import {useWindowDimensions, Text, View, Clipboard} from 'react-native';
import LottieView from 'lottie-react-native';
const Drawer = createDrawerNavigator();
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import {TabsNavigator} from './TabsNavigator';
import {LogInScreen} from '../screens/LogInScreen';
import {styles} from '../theme/styles';
import {AuthContext} from '../context/AuthContext';
import {ItemSeparator} from '../screens/ItemSeparator';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LateralMenu = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={TabsNavigator} />
      <Drawer.Screen name="LogIn/LogOut" component={LogInScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  const {user, status} = useContext(AuthContext);
  return (
    <DrawerContentScrollView>
      {/* avatar Part */}
      <View style={styles.avatarContainer}>
        <LottieView
          style={styles.avatar}
          source={
            status === 'authenticated'
              ? require('../assets/catLoggedIn.json')
              : require('../assets/catLoggedout.json')
          }
          autoPlay
          speed={0.5}
        />
      </View>

      <View
        style={{alignContent: 'center', alignItems: 'center', marginTop: 30}}
      >
        <Text style={{...styles.avatartext, fontWeight: 'bold'}}>
          {status === 'authenticated' ? 'Welcome!' : 'Hello stranger'}
        </Text>

        <Text
          style={{
            ...styles.avatartext,
            fontSize: 17,
            color: 'rgba(88,86,214,0.8)',
          }}
        >
          {status === 'authenticated' ? user?.email : 'Anonymous user'}
        </Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <ItemSeparator />
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.menutext}>
            <Icon name="home-outline" size={25} color="rgba(88,86,214,0.8)" />{' '}
            Home
          </Text>
        </TouchableOpacity>
        <ItemSeparator />
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('LogIn/LogOut')}

          onLongPress={async()=>{
            let fcmToken = await AsyncStorage.getItem('fcmToken');
            Clipboard.setString(fcmToken+'')
          }}
        >
          <Text style={styles.menutext}>
            <Icon
              name={
                status === 'not-authenticated'
                  ? 'log-in-outline'
                  : 'log-out-outline'
              }
              size={25}
              color="rgba(88,86,214,0.8)"
            />{' '}
            {status === 'not-authenticated' ? 'Log In' : 'Log Out'}
          </Text>
        </TouchableOpacity>
        <ItemSeparator />
      </View>
    </DrawerContentScrollView>
  );
};
