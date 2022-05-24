import {createContext, useReducer} from 'react';
import React from 'react';
import { authReducer } from './authReducer';

//Definy how willl look or what information will I have here
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//initial state of the information
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};


// *************************************************************************
//definy what the context will pass to the children
//we will used it to say to react how to use it and what exposses the context
export interface AuthContextProps {
  authState: AuthState;
  sigIn: () => void;
  changeIcon: (icon:string) => void;
  logOut: () => void;
  changeUsername: (userName:string) => void;
}

//create the context
//we create the context an indicate the props are of the type we difined before
export const AuthContex = createContext({} as AuthContextProps);


// *************************************************************************
//component which is the provider of the state
//thismeans that this is the father component taht will pass the info to the children?
export const AuthProvider = ({children}:any) => {

  const [authState, dispatch] = useReducer(authReducer,authInitialState)

  const sigInToReducer=()=>{
    dispatch({type:'signIn'})
  }

  const changeFavIcon=(iconName:string)=>{
    dispatch({type:'iconClicked',payload:iconName})
  }

  const logOut=()=>{
    dispatch({type:'logOut'})
  }
  const changeUsername=(userName:string)=>{
    dispatch({type:'changeUsername',payload:userName})
  }
  

// *************************************************************************

  return(
    
    <AuthContex.Provider value={{
        authState:authState,
        sigIn:sigInToReducer,
        changeIcon:changeFavIcon,
        logOut:logOut,
        changeUsername:changeUsername
    }}>
        {children}
    </AuthContex.Provider>
  ) 
};
