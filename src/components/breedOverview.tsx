import React from 'react'
import { Text, View } from 'react-native'
import { Cat } from '../interfaces/cats'

interface Props {
    breed:Cat
};

export const BreedOverview = ({breed}:Props) => {
  return (
   <View >
       <View>
           <Text>
               name: {breed.name}
           </Text>
       </View>
       <View>
           <Text>
               description: {breed.description}
           </Text>
       </View>
   </View>
  )
}
