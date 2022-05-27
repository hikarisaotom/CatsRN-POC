import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CategoryOverview} from '../components/CategoryOverview';
import {FadeInImage} from '../components/FadeInImage';
import {useCategories} from '../hooks/useCategories';
import {useImages} from '../hooks/useImages ';
import {styles} from '../theme/styles';
import {LoadingScreen} from './LoadingScreen';
import {Image} from '../interfaces/cats';
import { CloseBtn } from '../components/CloseBtn';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export const ImagesScreen = () => {
  const navigation=useNavigation()
  useEffect(() => {
    navigation.addListener('focus', e => {
      navigation
    .getParent()
    
    ?.setOptions({title: 'Random Images', headerShown: true});
    });
  }, [navigation]);
  const {categories} = useCategories();
  const {imagesByCategory, setNewImage, isLoading} = useImages(1, 2);
  return (
    <SafeAreaView style={{flexDirection: 'column'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {isLoading ? (
          <LoadingScreen />
        ) : (
          (imagesByCategory.length>0)&& <FadeInImage
          uri={imagesByCategory[0].url}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 0.63,
            resizeMode: 'cover',
          }}
        />
          // imagesByCategory.map(
          //   (item, index) =>
          //     index <= 0 && (
          //       <FadeInImage
          //         uri={item.url}
          //         style={{
          //           width: '100%',
          //           height: undefined,
          //           aspectRatio: 0.63,
          //           resizeMode: 'cover',
          //         }}
          //       />
          //     ),
          // )
        )}
         <View style={{
           position: 'absolute',
           zIndex: 999,
           elevation: 9,
           top: 20,
         //  righ: 10,
           borderRadius:20,
           paddingTop: 2,
           paddingBottom: 2,
           marginLeft:5,
           backgroundColor: 'rgba(192, 192, 192, 0.7)',
           alignItems: 'center',
         }}>
       <TouchableOpacity 
      onPress={() => {
        const category =
          categories[Math.floor(Math.random() * categories.length)];

        setNewImage(category.id);
      }}>
         <Text
           style={{
             ...styles.titleDetails,
           }}
         >
           {' '}
           <Icon name='sync-outline' size={40} color='black'/>
           {' '}
           
         </Text>
       </TouchableOpacity>
     </View>
     <View style={{...styles.title,width:"95%",borderRadius:20,marginTop:3,alignSelf:'center',backgroundColor:'rgba(88,86,214,0.1)'}}>
        <Text style={{fontSize:20}}>
               If you want to see more images just click on the reload option!
           </Text> 
     </View>
           
      </View>
  
    </SafeAreaView>
  );
};
