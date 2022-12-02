/* eslint-disable prefer-const */
import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import {
  GoogleAuthProvider, getAuth, signInWithRedirect,
  FacebookAuthProvider, signOut, getRedirectResult,
} from 'firebase/auth';
import {
  getFirestore, getDocs, collection, addDoc, query, where,
} from 'firebase/firestore';
// import { getDatabase, ref, set } from 'firebase/database';
import { GoogleSocialButton } from 'react-native-social-buttons';
import { FacebookSocialButton } from '../../components';
import app from '../../../firebase';
import { styles } from './loginSytles';

const Login = ({ navigation }) => {
  let arrayResultsBenficios = [];
  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
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
    signInWithRedirect(auth, providerGoogle);
    subscribir();
  };
  // Login Facebook
  const onAuthFaceebook = () => {
    signInWithRedirect(auth, providerFacebook);
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
    // To see the result of the login
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result?.user;
        if (user && token) {
          getColletionDataBenef();
          navigation.navigate('Dashboard');
        }
      }).catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }, []);
  return (
    <View style={styles.container}>
       <Image
        style={styles.principalImage}
        source={require('../../../assets/img/logoRolling.png')}
      />
      <FacebookSocialButton
        buttonText='Continuar con Facebook'
        onPress={onAuthFaceebook}
      />
      <GoogleSocialButton
        buttonText='Continuar con Google'
        onPress={onAuthGoogle}
      />
      <Text style={{ marginTop: '100px' }}>
        Si continúas, aceptas los Términos del servicio de Dynamo y
        confirmas que has leído nuestra Política de privacidad.
      </Text>
    </View>
  );
};
export default Login;
