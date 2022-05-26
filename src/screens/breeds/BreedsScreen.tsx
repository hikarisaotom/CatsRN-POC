import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import {BreedOverview} from '../../components/breedOverview';
import {useBreeds} from '../../hooks/useBreeds';
import {styles} from '../../theme/styles';
import {ItemSeparator} from '../ItemSeparator';
import {LoadingScreen} from '../LoadingScreen';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigators/BreedsStackNavigator';
import {AuthContext} from '../../context/AuthContext';

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

  const {isLoading, breeds, getCats} = useBreeds();
  // const navigation=useNavigation()

  if (isLoading) return <LoadingScreen />;
  const {user, status} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.globalContaier}>
      {status === 'authenticated' && (
        <Text style={styles.titleDetails}>
          Hello {' '}
          <Text
            style={{
             
              color: 'rgba(88, 86, 214, 0.5)',
              textAlign: 'center',
            }}
          >
            {user?.email}
          </Text>
          , let's have fun with cats
        </Text>
      )}
      <FlatList
        onRefresh={getCats}
        refreshing={isLoading}
        data={breeds}
        keyExtractor={item => item.id + item.name}
        //  ItemSeparatorComponent={ () => <ItemSeparator />}
        renderItem={({item}) => <BreedOverview breed={item} />}
      />
    </SafeAreaView>
  );
};
