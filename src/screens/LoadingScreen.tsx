import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'red',
        height: '100%',
      }}
    >
      <LottieView
        source={require('../assets/loadingCat.json')}
        style={{
          width: 350,
          height: 400,
                  }}
        speed={3}
        autoPlay
      />

      {/* <ActivityIndicator 
                size={ 50 }
                color="black"
            /> */}
    </View>
  );
};
