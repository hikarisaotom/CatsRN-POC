import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../../navigators/BreedsStackNavigator';
import {FadeInImage} from '../../components/FadeInImage';
import {styles} from '../../theme/styles';
import {CloseBtn} from '../../components/CloseBtn';
import {ItemSeparator} from '../ItemSeparator';
import {BreedDetailsSubSection} from '../../components/BreedDetailsSubSection';
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
      name_info: 'URL(OPT)',
      info: breed.cfa_url,
      icon: 'ios-person',
    },
    {
      name_info: 'Description',
      info: breed.description,
      icon: 'ios-person',
    },
    {
      name_info: 'Origin',
      info: breed.origin,
      icon: 'ios-person',
    },
    {
      name_info: 'Life Span',
      info: breed.life_span,
      icon: 'ios-person',
    },
  ];
  const friendly: BreedInfo[] = [
    {
      name_info: 'Cat (OPT)',
      info: breed.cat_friendly,
      icon: 'ios-person',
    },
    {
      name_info: 'Child',
      info: breed.child_friendly,
      icon: 'ios-person',
    },
    {
      name_info: 'Dog',
      info: breed.dog_friendly,
      icon: 'ios-person',
    },
    {
      name_info: 'People',
      info: breed.stranger_friendly,
      icon: 'ios-person',
    },
  ];

  const health: BreedInfo[] = [
    {
      name_info: 'Grommin',
      info: breed.grooming,
      icon: 'ios-person',
    },
    {
      name_info: 'Hairles',
      info: breed.hairless,
      icon: 'ios-person',
    },
    {
      name_info: ' Health issues',
      info: breed.health_issues,
      icon: 'ios-person',
    },
    {
      name_info: 'Hypoallergenic',
      info: breed.hypoallergenic,
      icon: 'ios-person',
    },
  ];
  const physical: BreedInfo[] = [
    {name_info: 'Energy level', info: breed.energy_level, icon: 'ios-person'},

    {name_info: 'Intelligence', info: breed.intelligence, icon: 'ios-person'},

    {name_info: 'Natural', info: breed.natural, icon: 'ios-person'},

    {name_info: 'Rare', info: breed.rare, icon: 'ios-person'},

    {
      name_info: 'Shedding Level',
      info: breed.shedding_level,
      icon: 'ios-person',
    },

    {
      name_info: 'Suppressed Tail',
      info: breed.suppressed_tail,
      icon: 'ios-person',
    },

    {name_info: 'Short Legs', info: breed.short_legs, icon: 'ios-person'},
  ];
  const social: BreedInfo[] = [
    {
      name_info: 'Adaptability',
      info: breed.adaptability,
      icon: 'ios-person',
    },
    {
      name_info: 'Affection Level',
      info: breed.affection_level,
      icon: 'ios-person',
    },
    {
      name_info: 'Bidability (OPT)',
      info: breed.bidability,
      icon: 'ios-person',
    },
    {
      name_info: 'Experimental',
      info: breed.experimental,
      icon: 'ios-person',
    },
    {
      name_info: 'Indoor',
      info: breed.indoor,
      icon: 'ios-person',
    },
    {
      name_info: 'Lap (OPT)',
      info: breed.lap,
      icon: 'ios-person',
    },
    {
      name_info: 'Rex',
      info: breed.rex,
      icon: 'ios-person',
    },
    {
      name_info: 'Social Needs',
      info: breed.social_needs,
      icon: 'ios-person',
    },
  ];

  const titles = [
    'General Information',
    'Friendly',
    'Health',
    'Physical Description',
    'Social',
  ];

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
          {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
        </View>

        <CloseBtn />
      </ScrollView>
    </SafeAreaView>
  );
};
