// import React, {useEffect, useState} from 'react';
// import {Text, View} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {createAccount, logIn, logOut} from '../utils/LogInManager';
// import {styles} from '../theme/styles';
// export const LogInScreen = () => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User>();

//   function onAuthStateChanged(user: FirebaseAuthTypes.User) {
//     console.log('user state changed to ', user.email);
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(user => {
//       if (user) {
//         onAuthStateChanged(user);
//       }
//     });
//     return subscriber; // unsubscribe on unmount
//   }, []);
//   return (
//     <View>
//       <Text>Log in Screen</Text>
//       {!user ? <Text>!user</Text> : <Text>user</Text>}
//       <TouchableOpacity
//         style={styles.logInBtn}
//         onPress={() => createAccount('test@test.com', 'SuperSecretPassword')}
//       >
//         <Text style={styles.textLogInBtn}> Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.logInBtn}
//         onPress={() => logIn('test@test.com', 'SuperSecretPassword')}
//       >
//         <Text style={styles.textLogInBtn}> Log In</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logInBtn} onPress={() => logOut()}>
//         <Text style={styles.textLogInBtn}> Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/styles';

interface Props extends StackScreenProps<any, any> {}

export const LogInScreen = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError,signUp,logOut,user} = useContext(AuthContext);

  const {email, password, onChange} = useForm({
    email: 'jane.doe@example.com',
    password: 'SuperSecretPassword!',
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('An error has ocurred', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onLogin = () => {
    console.log("log in",{email, password});
    Keyboard.dismiss();
    signIn({email, password});
  };

  const onSignUp = () => {
    console.log("Sign up ",{email, password});
    Keyboard.dismiss();
    signUp({email, password});
  };

  const onLogOut = () => {
    console.log("loggin out",user?.email);
    logOut();
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={{backgroundColor:'rgba(88,86,214,0.2)'}}>
          {/* Keyboard avoid view */}

          <Text style={styles.titleLogIn}>Login</Text>

          <Text style={styles.label}>Email:</Text>
          <TextInput
            placeholder="Ingrese su email:"
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              styles.inputField,
              Platform.OS === 'ios' && styles.inputFieldIOS,
            ]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            placeholder="******"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry
            style={[
              styles.inputField,
              Platform.OS === 'ios' && styles.inputFieldIOS,
            ]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Boton login */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.logInBtn}
            onPress={onLogin}
          >
            <Text style={styles.textLogInBtn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.logInBtn}
            onPress={onSignUp}
          >
            <Text style={styles.textLogInBtn}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.logInBtn}
            onPress={onLogOut}
          >
            <Text style={styles.textLogInBtn}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
