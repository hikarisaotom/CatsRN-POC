import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAccount, logIn, logOut } from '../utils/LogInManager';
import { styles } from '../theme/styles';
export const LogInScreen = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User) {
    console.log("user state changed to ",user.email)
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        onAuthStateChanged(user);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
   
    <View>
       <Text>Log in Screen</Text>
       {
      (!user) ? <Text>!user</Text> :  <Text>user</Text>
    }
      <TouchableOpacity style={styles.logInBtn}
      onPress={()=>createAccount("test@test.com","SuperSecretPassword")}>
        <Text style={styles.textLogInBtn}> Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logInBtn}
      onPress={()=>logIn("test@test.com","SuperSecretPassword")}>
        <Text style={styles.textLogInBtn}> Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logInBtn}
      onPress={()=>logOut()}>
        <Text style={styles.textLogInBtn}> Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
