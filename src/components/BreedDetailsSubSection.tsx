import React from 'react';
import {View, Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { BreedInfo } from '../screens/breeds/BreedDetails';
import {ItemSeparator} from '../screens/ItemSeparator';
import {styles} from '../theme/styles';
interface Props {
  name: string;
  info:BreedInfo[]
}
export const BreedDetailsSubSection = ({name,info}:Props) => {
  return (
    <View>
      <ItemSeparator />
      <View style={{width: '100%', backgroundColor: 'rgba(0,0,0,0.1)'}}>
        <Text style={styles.breedSubDetails}>{name}</Text>
      </View>
      <ItemSeparator />

      {/* Data here */}
      {info.map((data) => (
     (data.info!==undefined)&&( 
         (data.redirect)
         ?(<Text>
            <Icon name={data.icon} size={30} color="#4F8EF7" /> {' '}
            {data.name_info} : {data.info}
        </Text>)
         :(<Text>
            <Icon name={data.icon} size={30} color="#4F8EF7" /> {' '}
            {data.name_info} : {data.info}
        </Text>)
     )
      ))}
    </View>
  );
};
