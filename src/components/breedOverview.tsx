import { useNavigation } from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Cat} from '../interfaces/cats';
import {styles} from '../theme/styles';
import {FadeInImage} from './FadeInImage';

interface Props {
  breed: Cat;
}

export const BreedOverview = ({breed}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    
            onPress={
              /**HERE**/
/*TO SEND PARAMS WITH THE NAVIGATOR*/
() => navigation.navigate({name:"BreedDetailsScreen",params:breed})}
            >
      <View style={styles.breedType}>
        <View>
          <Text style={styles.title}>{breed.name}</Text>
        </View>
        <FadeInImage uri={breed.image?.url!} style={styles.image} />

        <View>
          <Text style={styles.description}>{breed.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

/**
 *     <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=>navigate.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={19} />
        <Text style={styles.itemText}>
          {menuItem.name} 
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="gray" size={19} />
      </View>
    </TouchableOpacity>
 */
