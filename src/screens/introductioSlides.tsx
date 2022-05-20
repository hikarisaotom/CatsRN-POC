import {StackScreenProps} from '@react-navigation/stack';
import React, {useState, useRef, useContext, useEffect} from 'react';
import {
  ImageSourcePropType,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useAnimation} from '../hooks/useAnimation';
import {FadeInImage} from '../components/FadeInImage';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Hey!, Hello there!',
    desc:
      'Welcome to the cats app, here you can find lots of information to lear more about your furry friend!, lets take and overview about what you can do here!',
    img: require('../assets/slide-1.gif'),
  },
  {
    title: 'Types of breed!',
    desc:
      'Have you ever wonder about the type of breed of a cat? which are their characteristics and more? well, not anymore! you can find all the information related to cat breeds here!',
    img: require('../assets/slide-2.gif'),
  },
  {
    title: 'Have Fun!',
    desc:
      'Besides of learning you can also have fun!, we all can agree that watching funny cat pictures is relaxing!, guess what? you can also do that in here!You can either see them divided by category or just have a random picture!.',
    img: require('../assets/slide-3.gif'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);
useEffect(() => {
  SplashScreen.hide();
}, [])

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}
      >
        <FadeInImage
          localImg={item.img}
          uri=""
          style={{
            width: 350,
            height: 400,
            resizeMode: 'cover',
          }}
        />

        <Text
          style={{
            ...styles.title,
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            ...styles.subTitle,
          }}
        >
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <Carousel
        // ref={ (c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}
      >
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
          }}
        />

        <Animated.View
          style={{
            opacity,
          }}
        >
          {activeIndex >= 2 && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                // width: 140,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#5856D6',
              }}
              activeOpacity={0.8}
              onPress={() => {
                if (isVisible.current) {
                  navigation.navigate('TabsNavigatorHomeScreen');
                }
              }}
            >
              
              <FadeInImage
                uri=""
                style={{width: 150, height: 150, marginTop: -35,marginRight:-145,}
              }
                localImg={require('../assets/slide-4.gif')}
              />
              <Text
                style={{
                  marginRight:80,
                  paddingLeft:10,
                  fontSize: 25,
                  color: 'white',
                  alignSelf: 'center',
                }}
              >
                Let's Go!
              </Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
