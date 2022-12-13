/* eslint-disable prefer-const */
import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import app from '../../../firebase';
import { styles } from './loginSytles';
import { setUser } from '../../../slices/userSlice';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const auth = getAuth(app);

  const setUserActive = (user) => {
    dispatch(setUser({
      fullname: user.providerData[0].displayName,
      email: user.providerData[0].email,
      avatar: user.providerData[0].photoURL,
      phonenumber: user.providerData[0].phoneNumber,
      role: user.providerData[0],
      idbeneficio: '',
      isactive: true,
    }));
  };

  const loginAuthWithEmailandPassword = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const { user } = userCredential;
        navigation.navigate('Dashboard');
        setUserActive(user);
      })
      .catch((error) => {
        Alert.alert('Error', error.message, [
          {
            text: 'Continuar',
            onPress: () => { },
          },
        ]);
        console.error(error);
      });
  };

  return (
    <View style={styles.container} behavior='padding'>
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
              placeholder='Ingrese su email'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='email'
        />
        {errors.email && errors.email.type === 'pattern' && (
          <Text style={styles.errorText}>
            Por favor, verifica la información ingresada.
          </Text>
        )}
        {errors.email && errors.email.type === 'required' && (
          <Text style={styles.errorText}>Este campo es obligatorio.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Ingrese su contraseña'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name='password'
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
        Si continúas, aceptas los Términos del servicio de Dynamo y confirmas
        que has leído nuestra Política de privacidad.
      </Text>
    </View>
  );
};
export default Login;
