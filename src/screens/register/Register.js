import React from 'react';

import {
  View, Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity,
} from 'react-native';

import {
  createUserWithEmailAndPassword, getAuth, updateProfile,
} from 'firebase/auth';

import {
  getFirestore, getDocs, collection, addDoc, query, where,
} from 'firebase/firestore';

import { useForm, Controller } from 'react-hook-form';
import app from '../../../firebase';
import { styles } from './registerStyles';

const Register = ({ navigation }) => {
  const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const onlyLetters = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
  const arrayResultsBenficios = [];

  const {
    control, setError, handleSubmit, formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const db = getFirestore(app);
  const auth = getAuth(app);
  // check Usuario que no se repita el Alta en Base de datos.-
  // y Agrega Usuario
  const addUserLogged = async (dataLogin) => {
    const usuariosRef = collection(db, 'usuarios');
    let q;
    await auth.onAuthStateChanged(user => {
      q = query(usuariosRef, where('email', '==', user.providerData[0].email));
    });

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 0) {
      try {
        await addDoc(collection(db, 'usuarios'), dataLogin);
        // eslint-disable-next-line no-alert
        alert(`Creado correctamente: ${dataLogin.fullname}`);
      } catch (error) {
        console.log(error);
        // eslint-disable-next-line no-alert
        alert('Hubo un error intente nuevamente...');
      }
      // eslint-disable-next-line no-alert
    } else alert('Usuario en base de datos... Logueo normal sin alta...');
  };
  const getColletionDataBenef = async () => {
    const beneficiosRef = collection(db, 'beneficios');
    const q = query(beneficiosRef, where('onlystaff', '==', false), where('isactive', '==', true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrayResultsBenficios.push(doc.id); // asigna los ids de beneficios en false.-
    });

    let dataLogin = {};
    console.log(arrayResultsBenficios);
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('LogIn');
        dataLogin = {
          avatar: user.providerData[0].photoURL,
          email: user.providerData[0].email,
          fullname: user.providerData[0].displayName,
          isactive: true,
          idbeneficio: arrayResultsBenficios,
          phonenumber: user.providerData[0].phoneNumber,
          role: 'user',
        };
        console.log(dataLogin);
        addUserLogged(dataLogin);
      } else {
        console.error('LogOut Fuera...');
      }
    });
  };

  // Create user and pass
  const createAuthWithEmailandPassword = (data) => {
    if (data.password === data.confirmPassword && isValid) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          // Update Profile
          const auth2 = getAuth();
          updateProfile(auth2.currentUser, {
            displayName: `${data.firstName}`,
            photoURL: 'https://picsum.photos/100/100',
          }).then(() => {
            console.log('Datos actualizados');
            console.log(user);
          }).catch((error) => {
            console.error(error, 'Hubo un error al actualizar...');
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError('password', { type: 'custom', message: 'Las contraseñas no coinciden.' });
      setError('confirmPassword', { type: 'custom', message: 'Las contraseñas no coinciden.' });
    }
  };

  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      >
        <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: onlyLetters,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Ingrese su nombre'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && errors.firstName.type === 'required' && <Text style={styles.errorText}>Este campo es obligatorio.</Text>}
        {errors.firstName && errors.firstName.type === 'pattern' && <Text style={styles.errorText}>Por favor, verifica la información ingresada.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: onlyLetters,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Ingrese su apellido'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
        {errors.lastName && errors.lastName.type === 'pattern' && <Text style={styles.errorText}>Por favor, verifica la información ingresada.</Text>}
        {errors.lastName && errors.lastName.type === 'required' && <Text style={styles.errorText}>Este campo es obligatorio.</Text>}
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
          name="email"
        />
        {errors.email && errors.email.type === 'pattern' && <Text style={styles.errorText}>Por favor, verifica la información ingresada.</Text>}
        {errors.email && errors.email.type === 'required' && <Text style={styles.errorText}>Este campo es obligatorio.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Ingrese la contraseña'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && errors.password.type === 'custom' && <Text style={styles.errorText}>{errors.password.message}</Text>}
        {errors.password && errors.password.type === 'required' && <Text style={styles.errorText}>Este campo es obligatorio.</Text>}
         <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Ingrese la contraseña'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && errors.confirmPassword.type === 'custom' && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
        {errors.confirmPassword && errors.confirmPassword.type === 'required' && <Text style={styles.errorText}>Este campo es obligatorio.</Text>}
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit(createAuthWithEmailandPassword)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Retroceder</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={createAuthWithEmailandPassword} title="Create User and Pass"/>
      </KeyboardAvoidingView>
  );
};

export default Register;
