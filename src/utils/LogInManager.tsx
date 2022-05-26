import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';

export const createAccount = async(email: string, password: string) => {
  await auth().createUserWithEmailAndPassword(
      email, password
    ).then(() => {
      console.log('User account created & signed in!');
    }).catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const logIn = async(email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password)
    .then((resp) => {
      console.log('User loggedin!', resp.user.email);
    })
    .catch(error => {
      console.log('Could not login!',error);
      
    });
};

export const logOut=async()=>{
    await auth()
  .signOut()
  .then(() => console.log('User logged out!'));
}
