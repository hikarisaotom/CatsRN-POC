import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';

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
  const {
    signIn,
    errorMessage,
    removeError,
    signUp,
    logOut,
    user,
    status,
  } = useContext(AuthContext);

  const {email, password, onChange} = useForm({
    email: 'jane.doe@example.com',
    password: 'SuperSecretPassword!',
  });
  const [action, setAction] = useState(true);
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
    console.log('log in', {email, password});
    Keyboard.dismiss();
    signIn({email, password});
  };

  const onSignUp = () => {
    console.log('Sign up ', {email, password});
    Keyboard.dismiss();
    signUp({email, password});
  };

  const onLogOut = () => {
    console.log('loggin out', user?.email);
    logOut();
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            //  paddingBottom: 150,
          }}
        >
          {/* Keyboard avoid view */}
          {status === 'not-authenticated' ? (
            <View>
              <Text style={styles.titleLogIn}>
                {action ? 'Sign In' : 'Sing Up'}
              </Text>

              <Text style={styles.label}>Email:</Text>
              <TextInput
                placeholder="Enter your Email:"
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
                onPress={action ? onLogin : onSignUp}
              >
                <Text style={styles.textLogInBtn}>
                  {action ? 'Log In' : 'Sign Up'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{alignSelf: 'center'}}
                onPress={() => setAction(!action)}
              >
                <Text
                  style={{...styles.textLogInBtn, color: 'rgba(88,86,214,1)'}}
                >
                  Want to sign {!action ? 'In' : 'Up'}?
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.logInBtn}
              onPress={onLogOut}
            >
              <Text style={styles.textLogInBtn}>Log Out</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{backgroundColor: 'white'}}>
          <LottieView
            source={require('../assets/login-Animation.json')}
            style={{
              width: '100%',
              height: 250,
              backgroundColor: 'white',
              marginLeft: 60,
              marginBottom: 20,
            }}
            autoPlay
            speed={0.5}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
