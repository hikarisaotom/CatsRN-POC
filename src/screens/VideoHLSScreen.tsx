import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useState} from 'react';
import Video from 'react-native-video';

export const VideoHLSScreen = () => {
  const [hlsUrl, setHlsUrl] = useState(
    // 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'
  );
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const videoTest = '../test-video.mp4';
  return (
    <SafeAreaView>
      <Video
        source={{uri: hlsUrl}} // the video file
        paused={false} // make it start
        style={{width: 200, height: 200}} // any style you want
        repeat={true} // make it a loop
      />
    </SafeAreaView>
  );
};
