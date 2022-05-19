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

export const ImagesScreen = () => {
  const {categories} = useCategories();
  const {imagesByCategory, setNewImage, isLoading} = useImages(1, 2);
  return (
    <SafeAreaView style={{flexDirection:'column'}}>
      <View style={{
          //backgroundColor:'red',
          width:'100%',
          height:'80%',
          marginBottom:50
      }}>
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
                     aspectRatio: 0.7,
                    resizeMode: 'cover',
                  }}
                />
              ),
          )
        )}
      </View>
      <TouchableOpacity
        disabled={isLoading}
        style={styles.getRandomBtn}
        onPress={() => {
          const category =
            categories[Math.floor(Math.random() * categories.length)];

          setNewImage(category.id);
        }}
      >
        <Text style={styles.titleDetails}>Get Random Image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
