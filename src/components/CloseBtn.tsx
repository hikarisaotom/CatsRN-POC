import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/styles';
// import { useNavigation } from '@react-navigation/core';
// import { useNavigation } from '@react-navigation/native';
export const CloseBtn = () => {
    const navigation = useNavigation();
  return (
  
       <View style={styles.backButton}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
         <Text
           style={{
             ...styles.titleDetails,
           }}
         >
           {' '}
           BACK{' '}
         </Text>
       </TouchableOpacity>
     </View>
  )
}
