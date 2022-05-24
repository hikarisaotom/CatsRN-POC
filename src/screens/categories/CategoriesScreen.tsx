import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import { CategoryOverview } from '../../components/CategoryOverview';
import { useCategories } from '../../hooks/useCategories';
import {styles} from '../../theme/styles';
import { ItemSeparator } from '../ItemSeparator';
import { LoadingScreen } from '../LoadingScreen';
import { useNavigation } from '@react-navigation/core';

export const CategoriesScreen = () => {
  const navigation=useNavigation()
  useEffect(() => {
    navigation.addListener('focus', e => {
      navigation
    .getParent()
    ?.getParent()
    ?.setOptions({title: 'Categories', headerShown: true});
    });
  }, [navigation]);
  
  const {isLoading, categories,getCategories} = useCategories();
  if (isLoading) return <LoadingScreen />;
  return (
    <SafeAreaView style={styles.globalContaier}>
    <View >
   <FlatList
  onRefresh={getCategories}
  refreshing={isLoading}
   data={categories}
   horizontal={false}
   numColumns={2}
   //ItemSeparatorComponent={ () => <ItemSeparator />}
   renderItem={({item}) =><CategoryOverview category={item}/> 
  }
  />
</View>
</SafeAreaView>
  );
};
