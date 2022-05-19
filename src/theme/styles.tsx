import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalContaier: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
  },

  breedType: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    width: '100%',
    //height:250,

    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 20,
  },

  title: {
    marginTop: -34.5,
    fontSize: 60,
    width: '75%',
    backgroundColor: 'rgba(192, 192, 192, 0.7)',
    paddingLeft: 15,
    borderTopRightRadius:10,
    borderBottomLeftRadius:20,
    paddingBottom:5,
    paddingTop:5,
  },
  getRandomBtn: {
   paddingTop:10,
   paddingBottom:10,
    width: '75%',
    backgroundColor: 'rgba(192, 192, 192, 0.7)',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius:20
  },

  description: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  imageContainer: {
    // zIndex: 1,
    // backgroundColor: 'red',
    // overflow: 'hidden',
    width: '100%',
    //  height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    // zIndex: 1,

    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    // zIndex: 1,

    flex: 1,
  },

  marginContainer: {
    // zIndex: 1,

    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  titleDetails: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 60,
    righ: 5,
  },
});
