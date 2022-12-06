/* eslint-disable prefer-const */
import React from 'react';
import {
  View, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import app from '../../../firebase';
import { styles } from './loginSytles';

const Login = ({ navigation }) => {
  const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // const provider = new GoogleAuthProvider();
  // const providerFace = new FacebookAuthProvider();
  const auth = getAuth(app);

  // login / logOut
  /* const subscribir = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('LogIn');
      } else {
        console.error('LogOut');
      }
    });
  };
 */
  // Login Google
  /*   const onAuthGoogle = () => {
    signInWithRedirect(auth, provider);
    subscribir();
  }; */

  // Login Facebook
  /*   const onAuthFaceebook = () => {
      signInWithRedirect(auth, providerFace);
      subscribir();
    }; */

  // Login user and pass
  const loginAuthWithEmailandPassword = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(userCredential);
        console.log(user);
        console.log(user.providerData[0]);
        navigation.navigate('Dashboard');
      })
      .catch((error) => {
        Alert.alert(
          'Error',
          error.message,
          [{
            text: 'Continuar',
            onPress: () => {},
          }],
        );
        console.log(error);
      });
    // subscribir();
  };

  return (
       <View
      style={styles.container}
      behavior='padding'
    >
       <Image
        style={styles.principalImage}
        source={require('../../../assets/img/logoRolling.png')}
      />
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: emailValidation,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errorText}>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit(loginAuthWithEmailandPassword)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      <Text style={styles.bottomText}>
        Si continúas, aceptas los Términos del servicio de Dynamo y
        confirmas que has leído nuestra Política de privacidad.
      </Text>
    </View>
  );
};
export default Login;
