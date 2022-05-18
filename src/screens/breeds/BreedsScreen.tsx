import React from 'react'
import { View,Text, FlatList } from 'react-native'
import { BreedOverview } from '../../components/breedOverview';
import { useBreeds } from '../../hooks/useBreeds';
import { LoadingScreen } from '../LoadingScreen';

export const BreedsScreen = () => {
  const {isLoading, breeds} = useBreeds();
  if (isLoading) return <LoadingScreen />;


  return (
   <View>
       <FlatList
       data={breeds}
       renderItem={({item}) => <BreedOverview breed={item}/>
       
      }
      />
   </View>
  )
}
