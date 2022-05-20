import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, Dimensions} from 'react-native';
import {CategoryOverview} from '../../components/CategoryOverview';
import {useImages} from '../../hooks/useImages ';
import {styles} from '../../theme/styles';
import {LoadingScreen} from '../LoadingScreen';
import {RootCategoriesParams} from '../../navigators/CategoriesStackNavigator.';
import {StackScreenProps} from '@react-navigation/stack';
import {FadeInImage} from '../../components/FadeInImage';
import {CloseBtn} from '../../components/CloseBtn';
import { ItemSeparator } from '../ItemSeparator';

interface Props
  extends StackScreenProps<RootCategoriesParams, 'CategoryDetails'> {}

export const CategoryDetails = ({route, navigation}: Props) => {
  const category = route.params;
  const {isLoading, imagesByCategory, loadMore, reloadData} = useImages(
    category.id,
    15,
  );
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  if (isLoading) return <LoadingScreen />;
  return (
    <SafeAreaView>
      <View>
      <CloseBtn />
        <FlatList
        ItemSeparatorComponent={()=><ItemSeparator/>}
          onRefresh={reloadData}
          refreshing={isLoading}
          ListHeaderComponent={<View style={{
            backgroundColor:'rgba(88,86,214,0.3)'
          // backgroundColor:'rgba(192,192,192,0.8)',
            }}>
              
            <Text  style={{
            ...styles.titleDetails,
            alignSelf: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            textTransform: 'capitalize', 
          }}> Enjoy the pictures of cats in!</Text>
<Text  style={{
            ...styles.titleDetails,
            alignSelf: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            textTransform: 'capitalize', 
            fontStyle:'italic'
          }}> {category.name}</Text>
          </View>}
          keyExtractor={(item, index) => index + item.toString()}
          style={{width: screenWidth, height: screenHeight}}
          data={imagesByCategory}
          horizontal={false}
          renderItem={({item}) => (
            <FadeInImage
              uri={item.url}
              style={
                /*{width: screenWidth, height: screenHeight}*/
                {
                  width: '100%',
                  height: undefined,
                  aspectRatio: 1,
                  resizeMode: 'cover',
                 // marginBottom:2
                }
              }
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.7}
          ListFooterComponent={() => <LoadingScreen />}
        />
        
      </View>
    </SafeAreaView>
  );
};
