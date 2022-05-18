import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {Cat} from '../interfaces/cats';
import {LoadingScreen} from '../screens/LoadingScreen';
import {styles} from '../theme/styles';
import {FadeInImage} from './FadeInImage';

interface Props {
  breed: Cat;
}

export const BreedOverview = ({breed}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const geturi = (): string => {
    if (breed.image === undefined) {
      return '../assets/notFound.jpeg';
    } else {
      if (!breed.image.url === undefined) {
        console.log(breed.image!.url!);
        return breed.image!.url!;
      }
      return '../assets/notFound.jpeg';
    }
  };
  return (

    <View style={styles.breedType}>
         <View>
        <Text style={styles.title}>{breed.name}</Text>
      </View>
       <FadeInImage uri={breed.image?.url!} style={styles.image} />
     
      <View>
        <Text style={styles.description}>{breed.description}</Text>
      </View>
    </View>
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
