import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, Dimensions} from 'react-native';
import {CategoryOverview} from '../../components/CategoryOverview';
import {useImages} from '../../hooks/useImages ';
import {styles} from '../../theme/styles';
import {LoadingScreen} from '../LoadingScreen';
import {RootCategoriesParams} from '../../navigators/CategoriesStackNavigator.';
import {StackScreenProps} from '@react-navigation/stack';
import {FadeInImage} from '../../components/FadeInImage';
import { CloseBtn } from '../../components/CloseBtn';

interface Props
  extends StackScreenProps<RootCategoriesParams, 'CategoryDetails'> {}

export const CategoryDetails = ({route, navigation}: Props) => {
  const category = route.params;
  const {isLoading, imagesByCategory,loadMore,reloadData} = useImages(category.id,15);
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  if (isLoading) return <LoadingScreen />;
  return (
    <SafeAreaView >
      <View>
        <FlatList
        onRefresh={reloadData}
        refreshing={isLoading}
        ListHeaderComponent={<Text>{category.name}</Text>}
        keyExtractor={(item, index) => index+item.toString()}
          style={{width: screenWidth, height: screenHeight}}
          data={imagesByCategory}
          horizontal={false}
          renderItem={({item}) => (
            <FadeInImage
              uri={item.url}
              style={/*{width: screenWidth, height: screenHeight}*/
              {width: '100%',
                height: undefined,
                aspectRatio: 1,
                resizeMode:'cover'}}
            />
          )}
          onEndReached={loadMore}
        onEndReachedThreshold={0.7}
     ListFooterComponent={()=><LoadingScreen/>}
        />
        <CloseBtn/>
      </View>
    </SafeAreaView>
  );
};
