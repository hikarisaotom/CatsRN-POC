import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  //TouchableOpacity,
  View,
} from 'react-native';
import {Cat} from '../interfaces/cats';
import {styles} from '../theme/styles';
import {FadeInImage} from './FadeInImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface Props {
  breed: Cat;
}

export const BreedOverview = ({breed}: Props) => {
  const navigation = useNavigation();
  return (
    <View >
      <TouchableOpacity
      style={styles.breedType}
        activeOpacity={0.8}
        onPress={
          /**HERE**/
          /*TO SEND PARAMS WITH THE NAVIGATOR*/
          () => navigation.navigate({name: 'BreedDetails', params: breed})
        }
      >
        
        <View >
        <FadeInImage uri={breed.image?.url!} style={styles.image} />
          <View style={styles.title}>
          <Text  style={{
            ...styles.titleDetails,color:'rgba(0, 0, 0, 0.5)'
          }}>{breed.name}</Text>
          </View>
      
        </View>
      </TouchableOpacity>
    </View>
  );
};
