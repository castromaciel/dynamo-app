import React from 'react';
import {
  View, Image, Alert, Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from 'react-native-social-buttons';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  FacebookAuthProvider,
  signOut,
} from 'firebase/auth';
import { styles } from './loginSytles';
// import { getFirestore } from 'firebase/firestore';
import app from '../../firebase';

const Login = ({ navigation }) => {
  const provider = new GoogleAuthProvider();
  const providerFace = new FacebookAuthProvider();
  const auth = getAuth(app);
  // const facebookIcon = 'https://cdn.simpleicons.org/facebook/3B5998';
  // const db = getFirestore(Login);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('LogIn');
      console.log(user.providerData[0].email);
      console.log(user.providerData[0].displayName);
      console.log(user.providerData[0].photoURL);
      console.log(user.providerData[0].phoneNumber);
      // id para identificar de forma exclusiva a su usuario en la base de datos
      // de usuarios de su proyecto de Firebase
      console.log(user.providerData[0].uid);
    } else {
      console.error('LogOut');
    }
    // console.log(user);
  });

  const onAuthGoogle = () => {
    signInWithRedirect(auth, provider);
    unsubscribe();
  };

  const onAuthFaceebook = () => {
    signInWithRedirect(auth, providerFace);
    unsubscribe();
  };

  const logOutAll = () => {
    const authA = getAuth();
    signOut(authA)
      .then(() => {
        console.log('LogOut');
      })
      .catch((error) => {
        console.log('Ocurrio un error!!!', error);
      });
  };

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  navigation.goBack(
    Alert.alert(
      'Salida segura',
      '¿Estás seguro que deseas salir?',
      [
        {
          text: 'Salir',
          onPress: () => { navigation.navigate('Login'); },
          style: 'cancel',
        },
        {
          text: 'Continuar',
        },
      ],
    ),
  );
  return (
    <View style={styles.container}>
      <Image
        style={styles.principalImage}
        source={{
          uri: 'https://picsum.photos/100/100',
        }}
      />
      <FacebookSocialButton
        buttonText='Continuar con Facebook'
        onPress={onAuthFaceebook}
      />
      <GoogleSocialButton
        buttonText='Continuar con Google'
        onPress={onAuthGoogle}
      />
      <Button onPress={logOutAll}>LogOut</Button>
      <Button onPress={goToDashboard}>Go to dashboard</Button>
    </View>
  );
};

export default Login;
