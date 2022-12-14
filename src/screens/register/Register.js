import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';

import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  query,
  where,
} from 'firebase/firestore';

import { useForm, Controller } from 'react-hook-form';
import app from '../../../firebase';
import { styles } from './registerStyles';

const Register = ({ navigation }) => {
  const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const spanishAlphabeticWithSpace = /^[a-zA-ZáéíóúÁÉÍÓÚ]+([ ][a-zA-ZáéíóúÁÉÍÓÚ]+)*$/g;

  const arrayResultsBenficios = [];

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors, isValid, isDirty },
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

  const addUserLogged = async (dataLogin) => {
    const usuariosRef = collection(db, 'usuarios');
    let q;
    await auth.onAuthStateChanged((user) => {
      q = query(usuariosRef, where('email', '==', user.providerData[0].email));
    });

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 0) {
      try {
        await addDoc(collection(db, 'usuarios'), dataLogin);
      } catch (error) {
        Alert.alert(
          'Error',
          ['Ha ocurrido un error, por favor reintenta nuevamente.', error],
          [
            {
              text: 'Continuar',
              style: 'default',
            },
          ],
        );
      }
    }
  };
  const getColletionDataBenef = async () => {
    const beneficiosRef = collection(db, 'beneficios');
    const q = query(
      beneficiosRef,
      where('onlystaff', '==', false),
      where('isactive', '==', true),
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrayResultsBenficios.push(doc.id);
    });

    let dataLogin = {};
    auth.onAuthStateChanged((user) => {
      if (user) {
        dataLogin = {
          avatar: user.providerData[0].photoURL,
          email: user.providerData[0].email,
          fullname: user.providerData[0].displayName,
          isactive: true,
          idbeneficio: arrayResultsBenficios,
          phonenumber: user.providerData[0].phoneNumber,
          role: 'user',
        };
        addUserLogged(dataLogin);
      } else {
        Alert.alert('Ha ocurrido un error', 'Por favor intenta nuevamente', [
          {
            text: 'Continuar',
            style: 'default',
          },
        ]);
      }
    });
  };

  const createAuthWithEmailandPassword = (data) => {
    if (data.password === data.confirmPassword && isValid) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const { user } = userCredential;
          const auth2 = getAuth();
          updateProfile(auth2.currentUser, {
            displayName: `${data.firstName} ${data.lastName}`,
            photoURL: 'https://picsum.photos/100/100',
          })
            .then(() => {
              getColletionDataBenef();
              Alert.alert('Éxito', 'El usuario fue creado correctamente.', [
                {
                  text: 'Continuar',
                  style: 'default',
                  onPress: () => navigation.navigate('Login'),
                },
              ]);
            })
            .catch((error) => {
              console.error(error, 'Hubo un error al actualizar...');
              Alert.alert(
                'Error',
                `Ha ocurrdo un error y no se pudo crear tu usuario, por favor reintenta nuevamente.'${error.message}`,
                [
                  {
                    text: 'Continuar',
                    style: 'default',
                  },
                ],
              );
            });
        })
        .catch((error) => {
          Alert.alert('Error', `${error.message}`, [
            {
              text: 'Continuar',
              style: 'default',
            },
          ]);
        });
    } else {
      setError('password', {
        type: 'custom',
        message: 'Las contraseñas no coinciden.',
      });
      setError('confirmPassword', {
        type: 'custom',
        message: 'Las contraseñas no coinciden.',
      });
    }
  };

  const onBack = (data) => {
    if (!isDirty) {
      navigation.navigate('Login');
    } else {
      Alert.alert(
        '¿Seguro que deseas salir?',
        'Perderas toda la información ingresada.',
        [
          {
            text: 'Salir',
            onPress: () => navigation.navigate('Login'),
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => { },
            style: 'default',
          },
        ],
      );
    }
  };
  return (
    <View style={styles.container} behavior='padding'>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: spanishAlphabeticWithSpace,
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
          name='firstName'
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <Text style={styles.errorText}>Este campo es obligatorio.</Text>
        )}
        {errors.firstName && errors.firstName.type === 'pattern' && (
          <Text style={styles.errorText}>
            Por favor, verifica la información ingresada.
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: spanishAlphabeticWithSpace,
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
          name='lastName'
        />
        {errors.lastName && errors.lastName.type === 'pattern' && (
          <Text style={styles.errorText}>
            Por favor, verifica la información ingresada.
          </Text>
        )}
        {errors.lastName && errors.lastName.type === 'required' && (
          <Text style={styles.errorText}>Este campo es obligatorio.</Text>
        )}
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
            minLength: 6,
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
          name='password'
        />
        {errors.password && errors.password.type === 'custom' && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
        {errors.password && errors.password.type === 'required' && (
          <Text style={styles.errorText}>Este campo es obligatorio.</Text>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Text style={styles.errorText}>
            La longitud mínima de la contraseña debe ser de 6 dígitos.
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Reingrese la contraseña'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name='confirmPassword'
        />
        {errors.confirmPassword && errors.confirmPassword.type === 'custom' && (
          <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
        )}
        {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
          <Text style={styles.errorText}>Este campo es obligatorio.</Text>
        )}
        {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && (
          <Text style={styles.errorText}>
            La longitud mínima de la contraseña debe ser de 6 dígitos.
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit(createAuthWithEmailandPassword)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onBack}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Retroceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
