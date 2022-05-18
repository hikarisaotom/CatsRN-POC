import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    globalContaier:{
        flex:1,
        backgroundColor:'white',
        marginLeft:20,
        marginRight:20
    
    },

    breedType:{
        paddingTop:25,
        backgroundColor:'white',
        flexDirection:'column'
    
    }
,image:{
    // zIndex: 1,
    width:'100%',
    height:250,
},

title:{
    fontSize:20,
    alignSelf:'center',
    marginBottom:15
},
description:{
    fontSize:15,
    alignSelf:'flex-start',
    marginTop:15
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


