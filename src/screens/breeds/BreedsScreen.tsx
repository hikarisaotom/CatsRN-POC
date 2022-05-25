import React, { useEffect } from 'react'
import { View,Text, FlatList, useWindowDimensions, SafeAreaView, Platform } from 'react-native'
import { BreedOverview } from '../../components/breedOverview';
import { useBreeds } from '../../hooks/useBreeds';
import { styles } from '../../theme/styles';
import { ItemSeparator } from '../ItemSeparator';
import { LoadingScreen } from '../LoadingScreen';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParams} from '../../navigators/BreedsStackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'BreedsScreen'> {}

export const BreedsScreen = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.addListener('focus', e => {
      navigation
    .getParent()
    ?.getParent()
    ?.setOptions({title: 'Breeds', headerShown: true});
    });
   
    
  }, [navigation]);

  const {isLoading, breeds,getCats} = useBreeds();
 // const navigation=useNavigation()

  if (isLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={styles.globalContaier}>
       <FlatList
         onRefresh={getCats}
         refreshing={isLoading}
       data={breeds}
       keyExtractor={(item=>item.id+item.name)}
      //  ItemSeparatorComponent={ () => <ItemSeparator />}
       renderItem={({item}) => <BreedOverview breed={item}/>
      }
      />
 
    </SafeAreaView>
 
  )
}
