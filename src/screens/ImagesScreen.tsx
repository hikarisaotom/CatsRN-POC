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

export const ImagesScreen = () => {
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
          imagesByCategory.map(
            (item, index) =>
              index <= 0 && (
                <FadeInImage
                  uri={item.url}
                  style={{
                    
                    width: '100%',
                    height: undefined,
                    aspectRatio: 0.6,
                    resizeMode: 'cover',
                  }}
                />
              ),
          )
        )}
         <View style={styles.backButton}>
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
           Reload{' '}
         </Text>
       </TouchableOpacity>
     </View>
     <View style={{...styles.title,width:"95%",borderRadius:20,marginTop:10,alignSelf:'center'}}>
        <Text style={{fontSize:20}}>
               If you want to see more images just click on the reload option!
           </Text> 
     </View>
           
      </View>
  
    </SafeAreaView>
  );
};
