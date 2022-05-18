import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Cat} from '../../interfaces/cats';
import {RootStackParams} from '../../navigators/BreedsStackNavigator';
import {FadeInImage} from '../../components/FadeInImage';
import {styles} from '../../theme/styles';
const screenHeight = Dimensions.get('screen').height;

/**HERE**/
/*TO SEND PARAMS WITH THE NAVIGATOR*/
interface Props extends StackScreenProps<RootStackParams, 'BreedDetails'> {}

export const BreedDetails = ({route, navigation}: Props) => {
  const breed = route.params;

  //   return (
  //     <SafeAreaView style={styles.globalContaier}>
  //     <View>
  //      <Text>
  //        {breed.name}

  //      </Text>
  //     </View>
  //     </SafeAreaView>
  //   );
  // };
  console.log('cat');
  console.log(breed.image?.url!);

  return (
    // <SafeAreaView >
      <ScrollView>
        {/* <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
        <FadeInImage uri={breed.image?.url!}  style={{...styles.posterImage,height: screenHeight * 0.5}} />
        </View>
      </View> 
      <FadeInImage uri={breed.image?.url!}  style={styles.posterImage}/>*/}
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <FadeInImage
              uri={breed.image?.url!}
              style={{
                ...styles.image,
                height: screenHeight * 0.45,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.subTitle}>{breed.name}</Text>
          <Text style={styles.titleDetails}>{breed.alt_names}</Text>
        </View>

        {/* {isLoading ? (
      <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
    ) : (
      <MovieDetails movieFull={movieFull!} cast={cast} />
    )} */}

        {/* Boton para cerrar */}
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text
              style={{
                ...styles.titleDetails,
                backgroundColor: 'purple',
              }}
            >
              {' '}
              BACK{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};
