import React from 'react'
import { View,Text, FlatList, useWindowDimensions, SafeAreaView, Platform } from 'react-native'
import { BreedOverview } from '../../components/breedOverview';
import { useBreeds } from '../../hooks/useBreeds';
import { styles } from '../../theme/styles';
import { ItemSeparator } from '../ItemSeparator';
import { LoadingScreen } from '../LoadingScreen';

export const BreedsScreen = () => {
  const {isLoading, breeds} = useBreeds();
  // const dimentions=useWindowDimensions();
  if (isLoading) return <LoadingScreen />;


  return (
    <SafeAreaView style={styles.globalContaier}>
        <View >
       <FlatList
       data={breeds}
       ItemSeparatorComponent={ () => <ItemSeparator />}
       renderItem={({item}) => <BreedOverview breed={item}/>
       
      }
      />
   </View>
    </SafeAreaView>
 
  )
}
