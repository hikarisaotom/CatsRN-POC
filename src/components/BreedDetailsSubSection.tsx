import React from 'react';
import {View, Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {BreedInfo} from '../screens/breeds/BreedDetails';
import {ItemSeparator} from '../screens/ItemSeparator';
import {styles} from '../theme/styles';
interface Props {
  name: string;
  info: BreedInfo[];
}
export const BreedDetailsSubSection = ({name, info}: Props) => {
  const startZise = 15;
  const starcolor = 'rgba(255,215,0,0.7)';
  //const descriptionsColor = '#4F8EF7';
  const descriptionsColor = 'rgba(88,86,214,1)';

  const normalSize = 32;
  //const btnColor='#5856D6'
  const btnColor = 'rgba(88,86,214,0.2)';

  const getBeginning = (data: BreedInfo) => {
    return (
      <Text style={{fontWeight: 'bold'}}>
        <Icon name={data.icon} size={normalSize} color={descriptionsColor} />{' '}
        {data.name_info}
        {': '}
      </Text>
    );
  };
  return (
    <View>
      <ItemSeparator />
      <View style={{width: '100%', backgroundColor: 'rgba(0,0,0,0.1)'}}>
        <Text style={styles.breedSubDetails}>{name}</Text>
      </View>
      <ItemSeparator />

      {/* Data here */}
      {info.map(
        data =>
          data.info !== undefined &&
          (data.redirect ? ( //we have a link and need to redirect to the browser
            <TouchableOpacity
              onPress={() => {
                data.info !== undefined && Linking.openURL(data.info);
              }}
              style={{
                backgroundColor: btnColor,
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              <Text style={{...styles.breedSubDetails, alignSelf: 'center',}}>
                <Icon name={data.icon} size={normalSize} color="black" />
                {'   '} Visit The Web Site
              </Text>
            </TouchableOpacity>
          ) : (
            //we have normal information
            <>
              {typeof data.info === 'number' ? ( //information that needs to be ranked
                <Text>
                  {getBeginning(data)}
                  {data.info > 0 ? ( //has info to rank
                    [...Array(data.info)].map(() => (
                      <Icon name="star" size={startZise} color={starcolor} />
                    ))
                  ) : (
                    //the rank info is 0
                    <Icon
                      name="star-outline"
                      size={startZise}
                      color={starcolor}
                    />
                  )}
                </Text>
              ) : (
                // it doest not have info to rank, just plain text
                <>
                  {data.name_info.includes('Description') ? (
                    //we have the description, this needs a different display
                    <View style={{flexDirection: 'column'}}>
                      <Text style={{alignSelf: 'center', fontWeight: '900'}}>
                        <Icon
                          name={data.icon}
                          size={normalSize}
                          color={descriptionsColor}
                        />{' '}
                        {data.name_info}
                        {': '}
                      </Text>
                      <Text style={{textAlign: 'justify'}}>{data.info}</Text>
                    </View>
                  ) : (
                    //normal data to be displayed
                    <Text>
                      {getBeginning(data)}
                      {data.info}
                    </Text>
                  )}
                </>
              )}
            </>
          )),
      )}
    </View>
  );
};
