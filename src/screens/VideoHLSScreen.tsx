import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, Platform, Dimensions} from 'react-native';
import {useState} from 'react';
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/styles';
import {LoadingScreen} from './LoadingScreen';
import Icon from 'react-native-vector-icons/Ionicons';
export const VideoHLSScreen = () => {
  const hlsUrl =
    'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8';
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const videoPlayer = React.useRef();

  const descriptionsColor = 'rgba(88,86,214,1)';
  const normalSize = 32;

  const {width: screenWidth} = Dimensions.get('window');
  // if (isLoading) return <LoadingScreen />;
  return (
    <SafeAreaView>
      <View style={{width: screenWidth, height: '100%'}}>
        <Video
          source={{uri: hlsUrl}} // the video file
          //paused={false} // make it start
          style={{width: '100%', height: 300, flex: 9}} // any style you want
          repeat={true} // make it a loop
          controls={true}
          paused={isPlaying}
          muted={isMuted}
          // ref={ref => (videoPlayer.current = ref)}
          // onLoad={() =>setLoading(false)}
          //  onEnd={() => setLoading(false)}
          // onReadyForDisplay={()=>setLoading(false)}
        />
        {Platform.OS === 'android' && (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => setIsPlaying(p => !p)}
              style={{...styles.playerButton, width: screenWidth * 0.45}}
            >
              <Icon
                name={isPlaying ? 'pause-outline' : 'play-outline'}
                size={normalSize}
                color={descriptionsColor}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsMuted(m => !m)}
              style={{...styles.playerButton, width: screenWidth * 0.45}}
            >
              <Icon
                name={isMuted ? 'volume-high-outline' : 'volume-mute-outline'}
                size={normalSize}
                color={descriptionsColor}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
