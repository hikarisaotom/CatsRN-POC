import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParams} from '../../navigators/BreedsStackNavigator';
import {FadeInImage} from '../../components/FadeInImage';
import {styles} from '../../theme/styles';
import { CloseBtn } from '../../components/CloseBtn';
const screenHeight = Dimensions.get('screen').height;

/**HERE**/
/*TO SEND PARAMS WITH THE NAVIGATOR*/
interface Props extends StackScreenProps<RootStackParams, 'BreedDetails'> {}

export const BreedDetails = ({route, navigation}: Props) => {
  const breed = route.params;
  return (
     <SafeAreaView >
      <ScrollView>
          <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <FadeInImage
              uri={breed.image?.url!}

              style={/*{
                ...styles.image,
                height: screenHeight * 0.45,
                alignSelf: 'center',
              }*/
              {
                width: '100%',
                height: undefined,
                aspectRatio: 1.2,
                resizeMode:'cover'
            }}
            />
          </View>
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.titleDetails}>{breed.name}</Text>
          <Text style={styles.subTitle}>{breed.alt_names}</Text>
        </View>

        <CloseBtn /> 
      </ScrollView>
      </SafeAreaView>
    );
};
