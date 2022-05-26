import React, {useContext, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../../navigators/BreedsStackNavigator';
import {FadeInImage} from '../../components/FadeInImage';
import {styles} from '../../theme/styles';
import {CloseBtn} from '../../components/CloseBtn';
import {ItemSeparator} from '../ItemSeparator';
import {BreedDetailsSubSection} from '../../components/BreedDetailsSubSection';
import {AuthContext} from '../../context/AuthContext';
const screenHeight = Dimensions.get('screen').height;

/**HERE**/
/*TO SEND PARAMS WITH THE NAVIGATOR*/
interface Props extends StackScreenProps<RootStackParams, 'BreedDetails'> {}
export interface BreedInfo {
  name_info: string;
  info: string | number | undefined;
  redirect?: boolean;
  icon: string;
  useImage?: boolean;
}
export const BreedDetails = ({route, navigation}: Props) => {
  const breed = route.params;
  const general: BreedInfo[] = [
    {
      name_info: 'Description',
      info: breed.description,
      icon: 'document-text-outline',
    },
    {
      name_info: 'Origin',
      info: breed.origin,
      icon: 'earth-outline',
    },
    {
      name_info: 'Life Span',
      info: breed.life_span,
      icon: 'hourglass-outline',
    },
    {
      name_info: 'URL',
      info: breed.cfa_url,
      icon: 'desktop-outline',
      redirect: true,
    },
  ];
  const friendly: BreedInfo[] = [
    {
      name_info: 'Cat',
      info: breed.cat_friendly,
      icon: 'logo-octocat',
    },
    {
      name_info: 'Child',
      info: breed.child_friendly,
      icon: 'people-outline',
    },
    {
      name_info: 'Dog',
      info: breed.dog_friendly,
      icon: 'paw-outline',
    },
    {
      name_info: 'People',
      info: breed.stranger_friendly,
      icon: 'walk-outline',
    },
  ];

  const health: BreedInfo[] = [
    {
      name_info: 'Grommin',
      info: breed.grooming,
      icon: 'paw-outline',
    },
    {
      name_info: 'Hairles',
      info: breed.hairless,
      icon: 'rose-outline',
    },
    {
      name_info: ' Health issues',
      info: breed.health_issues,
      icon: 'bandage-outline',
    },
    {
      name_info: 'Hypoallergenic',
      info: breed.hypoallergenic,
      icon: 'medkit-outline',
    },
  ];
  const physical: BreedInfo[] = [
    {name_info: 'Energy level', info: breed.energy_level, icon: 'battery-full'},

    {name_info: 'Intelligence', info: breed.intelligence, icon: 'library'},

    {name_info: 'Natural', info: breed.natural, icon: 'leaf'},

    {name_info: 'Rare', info: breed.rare, icon: 'planet-outline'},

    {
      name_info: 'Shedding Level',
      info: breed.shedding_level,
      icon: 'basketball-outline',
    },

    {
      name_info: 'Suppressed Tail',
      info: breed.suppressed_tail,
      icon: 'alert-outline',
    },

    {name_info: 'Short Legs', info: breed.short_legs, icon: 'body-outline'},
  ];
  const social: BreedInfo[] = [
    {
      name_info: 'Adaptability',
      info: breed.adaptability,
      icon: 'happy-outline',
    },
    {
      name_info: 'Affection Level',
      info: breed.affection_level,
      icon: 'heart-circle-outline',
    },
    {
      name_info: 'Bidability',
      info: breed.bidability,
      icon: 'footsteps-outline',
    },
    {
      name_info: 'Experimental',
      info: breed.experimental,
      icon: 'flask-outline',
    },
    {
      name_info: 'Indoor',
      info: breed.indoor,
      icon: 'home-outline',
    },
    {
      name_info: 'Lap',
      info: breed.lap,
      icon: 'heart-outline',
    },
    {
      name_info: 'Rex',
      info: breed.rex,
      icon: 'book-outline',
    },
    {
      name_info: 'Social Needs',
      info: breed.social_needs,
      icon: 'fitness-outline',
    },
  ];

  const titles = [
    'General Information',
    'Friendly',
    'Health',
    'Physical Description',
    'Social',
  ];
  useEffect(() => {
    navigation.addListener('focus', e => {
      showNavigators(true);
    });
    navigation.addListener('beforeRemove', e => {
      showNavigators(false);
    });
  }, [navigation]);

  const showNavigators = (show: boolean) => {
    navigation.setOptions({
      title: breed.name,
      headerBackTitle: 'Breeds',
      headerShown: show,
    });
    navigation.getParent()?.getParent()?.setOptions({
      // title: 'Breeds',
      headerShown: !show,
    });
  };
 
  return (
    <SafeAreaView>
     
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <FadeInImage
              uri={breed.image?.url!}
              style={
                /*{
                ...styles.image,
                height: screenHeight * 0.45,
                alignSelf: 'center',
              }*/
                {
                  width: '100%',
                  height: undefined,
                  aspectRatio: 1.2,
                  resizeMode: 'cover',
                }
              }
            />
          </View>
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.titleDetails}>{breed.name}</Text>
          <Text style={styles.subTitle}>{breed.alt_names}</Text>
          {/* GENERAL INFO   */}
          <BreedDetailsSubSection name={titles[0]} info={general} />
          {/* FRIENDLY */}
          <BreedDetailsSubSection name={titles[1]} info={friendly} />
          {/* Health */}
          <BreedDetailsSubSection name={titles[2]} info={health} />
          {/* physical description */}
          <BreedDetailsSubSection name={titles[3]} info={physical} />
          {/* Social */}
          <BreedDetailsSubSection name={titles[4]} info={social} />
          {/* <Icon name="ios-person" size={30} color={descriptionsColor} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
