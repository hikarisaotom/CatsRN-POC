import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImagesScreen} from '../screens/ImagesScreen';
import {BreedsStackNavigator} from './BreedsStackNavigator';
import {CategoriesStackNavigator} from './CategoriesStackNavigator.';
import React from 'react';
import {View} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import { VideoHLSScreen } from '../screens/VideoHLSScreen';


const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  const getImageType = (name: string, focused: boolean) => {
    switch (name) {
      case 'Breeds':
        if (focused) {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/1.2.png')}
              style={{width: 35, height: 35}}
            />
          );
        } else {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/1.1.png')}
              style={{width: 35, height: 35}}
            />
          );
        }
      case 'Categories':
        if (focused) {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/2.2.png')}
              style={{width: 35, height: 35}}
            />
          );
        } else {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/2.1.png')}
              style={{width: 35, height: 35}}
            />
          );
        }

      case 'Images':
        if (focused) {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/3.2.png')}
              style={{width: 35, height: 35}}
            />
          );
        } else {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/3.1.png')}
              style={{width: 35, height: 35}}
            />
          );
        }

      case 'Video':
        if (focused) {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/4.2.png')}
              style={{width: 35, height: 35}}
            />
          );
        } else {
          return (
            <FadeInImage
              uri=""
              localImg={require('../assets/CatIcons/4.1.png')}
              style={{width: 35, height: 35}}
            />
          );
        }
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        showIcon: true,
        tabBarIcon: ({color, focused, size}) => {
          return <View>{getImageType(route.name, focused)}</View>;
        },
      })}
    >
      <Tab.Screen name="Breeds" component={BreedsStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator} />
      <Tab.Screen name="Images" component={ImagesScreen} />
      <Tab.Screen name="Video" component={VideoHLSScreen} />
    </Tab.Navigator>
  );
};
