import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useReducer, useEffect} from 'react';
import React from 'react';
import {authReducer, AuthState, RegisterData} from './authReducer';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

//Type of information that the children of the context will see
type AuthContextprops = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  user: FirebaseAuthTypes.User | null;
  errorMessage: string;
  signUp: (data: RegisterData) => void;
  signIn: (data: RegisterData) => void;
  logOut: () => void;
  removeError: () => void;
};

//initial state of the app that will be handled by the reducer
const AuthInitialState: AuthState = {
  status: 'not-authenticated',
  token: null,
  user: null,
  errorMessage: '',
};
//Create the context with the type of props or data that will be share to the children
export const AuthContext = createContext({} as AuthContextprops);

//we create the provider of the context, this will contain the children components

export const AuthProvider = ({children}: any) => {
  {
    /* connecting the reducer with the state
we have the state, when something happends then we trigger the dispatch
this dispatch will be caught by the  reducer wich will execute the acction and return a new state*/
  }
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  // useEffect(() => {
  //   checkToken();
  // }, []);

  const checkToken = async () => {
    //dispatch({type: 'logout'});
    //   const token = await AsyncStorage.getItem('token');
    //   //there is no token,not autenticated
    //   if (!token) return dispatch({type: 'notAuthenticated'});
    //   //validate token
    //   const resp = await cafeApi.get('/auth');
    //   if (resp.status !== 200) {
    //     return dispatch({type: 'notAuthenticated'});
    //   }
    //   dispatch({
    //     type: 'signUp',
    //     payload: {
    //       token: resp.data.token,
    //       user: resp.data.usuario,
    //     },
    //   });
  };
  const signUp = async ({email, password}: RegisterData) => {
    try {
      const data = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
      const token = await data.user.getIdToken();
      dispatch({
        type: 'signUp',
        payload: {
          token: token,
          user: data.user,
        },
      });
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      let msg = error + '';
      if (error.code === 'auth/email-already-in-use') {
        msg = 'That email address is already in use!';
      }
      if (error.code === 'auth/invalid-email') {
        msg = 'That email address is invalid!';
      }
      console.error(msg);
      dispatch({
        type: 'addError',
        payload: msg || 'Please check the info',
      });
    }
  };
  const signIn = async ({email, password}: RegisterData) => {
    try {
      const data = await auth().signInWithEmailAndPassword(email, password);
      console.log('User loggedin!', data.user.email);
    
      const token = await data.user.getIdToken();
      dispatch({
        type: 'signUp',
        payload: {
          token: token,
          user: data.user,
        },
      });
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      let msg = 'Could not log in ' + error;
      console.error(msg);
      dispatch({
        type: 'addError',
        payload: msg || 'Please check the info',
      });
    }
  };

  const logOut = async () => {
    const data = await auth()
      .signOut()
      .then(() => console.log('User logged out!'));
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    //this is the context we created before
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
