/* eslint-disable prefer-const */
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import {
  GoogleAuthProvider, getAuth, signInWithRedirect,
  FacebookAuthProvider, signOut,
} from 'firebase/auth';
import {
  getFirestore, getDocs, collection, addDoc, query, where,
} from 'firebase/firestore';
import app from '../../../firebase';
import { styles } from './loginSytles';

const Login = () => {
  let arrayResultsBenficios = [];

  const provider = new GoogleAuthProvider();
  const providerFace = new FacebookAuthProvider();
  const auth = getAuth(app);
  const db = getFirestore(app);

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

  // login / logOut
  const subscribir = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('LogIn');
      } else {
        console.error('LogOut');
      }
    });
  };

  // Login Google
  const onAuthGoogle = () => {
    signInWithRedirect(auth, provider);
    subscribir();
  };

  // Login Facebook
  const onAuthFaceebook = () => {
    signInWithRedirect(auth, providerFace);
    subscribir();
  };

  // LogOut
  const logOutAll = () => {
    const authA = getAuth();
    signOut(authA).then(() => {
      console.log('LogOut');
    }).catch((error) => {
      console.log('Ocurrio un error!!!', error);
    });
  };

  return (
    <View style={styles.container}>
      <Button onPress={onAuthGoogle}><b>Sign-in with Google</b></Button>
      <Button onPress={onAuthFaceebook}><b>Sign-in with Facebook</b></Button>
      <Button onPress={logOutAll}>LogOut</Button>
      <Button onPress={getColletionDataBenef}><b> ADD Data Coleccion Beneficios </b></Button>
    </View>
  );
};
export default Login;
