import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
          <Icon name="arrow-back" size={30} color="black" /> Back{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
