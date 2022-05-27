import {StyleSheet} from 'react-native';
//color: '#5856D6'
export const styles = StyleSheet.create({
  breedSubDetails: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
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
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  // getRandomBtn: {
  //  paddingTop:10,
  //  paddingBottom:10,
  //   width: '90%',
  //   backgroundColor: 'rgba(192, 192, 192, 0.7)',
  //   alignItems: 'center',
  //  // alignSelf:'center',
  //   borderRadius:20,
  //   position: 'absolute'

  // },

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
    top: 20,
    righ: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(192, 192, 192, 0.7)',
    alignItems: 'center',
  },

  playerButton: {
    alignSelf: 'center',
    backgroundColor: 'rgba(192, 192, 192, 0.7)',
    // paddingLeft: 10,
    fontSize: 10,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '80%',
    borderRadius: 20,
    marginLeft: 10,
  },

  logInBtn: {
    alignSelf: 'center',
    backgroundColor: 'rgba(192, 192, 192, 0.7)',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: 50,
    width: '80%',
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  textLogInBtn: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleLogIn: {
    color: 'rgba(88,86,214,0.9)',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  inputField: {
    color: 'rgba(88,86,214,0.5)',
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  inputFieldIOS: {
    borderBottomColor: 'rgba(88,86,214,0.5)',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  tabImage: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
  avatarContainer: {
    // backgroundColor:'red',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBtn: {
    marginVertical: 10,
  },
  menutext: {
    fontSize: 20,
  },

  avatartext: {
    fontSize: 20,
     marginTop: 5,
     color: 'rgba(0, 0, 0, 0.5)'
    },
});
