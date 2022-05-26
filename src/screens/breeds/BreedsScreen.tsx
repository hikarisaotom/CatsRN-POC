import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
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
import {SearchInput} from '../../components/SearchInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Cat} from '../../interfaces/cats';

interface Props extends StackScreenProps<RootStackParams, 'BreedsScreen'> {}

const screenWidth = Dimensions.get('window').width;

export const BreedsScreen = ({route, navigation}: Props) => {
  const {isLoading, breeds, getCats} = useBreeds();
  // const navigation=useNavigation()
  const {user, status} = useContext(AuthContext);
  const [breedsFiltered, setBreedsFiltered] = useState<Cat[]>([]);
  const [searching, setSearching] = useState<boolean>(false);

  const [term, setTerm] = useState('');
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    navigation.addListener('focus', e => {
      navigation
        .getParent()
        ?.getParent()
        ?.setOptions({title: 'Breeds', headerShown: true});
    });
  }, [navigation]);
  useEffect(() => {
    console.log('change to ', term);
    if (term.length === 0) {
      setSearching(false);
      return setBreedsFiltered([]);
    }
    setSearching(true);
    if (isNaN(Number(term))) {
      setBreedsFiltered(
        breeds.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    }
  }, [term]);
  if (isLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={styles.globalContaier}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SearchInput
          onDebounce={value => setTerm(value)}
          style={{
            // position: 'absolute',
            // zIndex: 999,
            width: screenWidth - 40,
            // top: Platform.OS === 'ios' ? top : top + 30,
            marginBottom: 10,
            marginTop: 10,
          }}
        />

        <FlatList
          onRefresh={getCats}
          refreshing={isLoading}
          data={searching ? breedsFiltered : breeds}
          keyExtractor={item => item.id + item.name}
          //  ItemSeparatorComponent={ () => <ItemSeparator />}
          renderItem={({item}) => <BreedOverview breed={item} />}
          ListHeaderComponent={
            <>
              {status === 'authenticated' && (
                <Text style={styles.titleDetails}>
                  Hello{' '}
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
            </>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
