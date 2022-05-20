import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Category} from '../interfaces/cats';
import {styles} from '../theme/styles';
import {FadeInImage} from './FadeInImage';
import {useImages} from '../hooks/useImages ';
interface Props {
  category: Category;
}
export const CategoryOverview = ({category}: Props) => {
  const navigation = useNavigation();
  const {imagesByCategory} = useImages(category.id, 1);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flex: 1,
       backgroundColor: 'rgba(192,192,192,0.1)',
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 5,
        borderColor: 'rgba(192,192,192,0.2)',
        borderWidth: 3,
      }}
      onPress={() =>
        navigation.navigate({name: 'CategoryDetails', params: category})
      }
    >
      <View>
        <View>
          <Text
            style={{
              ...styles.titleDetails,
              alignSelf: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              textTransform: 'capitalize'
            }}
          >
            {category.name}
          </Text>
        </View>

        {imagesByCategory.length > 0 ? (
          <FadeInImage
            uri={imagesByCategory[0].url}
            style={{...styles.image, marginBottom: 15}}
            // localImg={require('../assets/category.png')}
          />
        ) : (
          <FadeInImage
            uri=""
            style={{...styles.image, marginBottom: 15}}
            localImg={require('../assets/catCalm-TEST.gif')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
