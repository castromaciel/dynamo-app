import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { Button} from 'react-native-paper'
import {
    GoogleAuthProvider, getAuth, signInWithRedirect, FacebookAuthProvider,
    signInWithPopup, signOut
} from "firebase/auth";

// import { getFirestore } from "firebase/firestore";
import app from '../../firebase';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const providerFace = new FacebookAuthProvider();
    const auth = getAuth(app);

    // const db = getFirestore(Login);

    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            console.log("LogIn");
            console.log(user.providerData[0].email);
            console.log(user.providerData[0].displayName);
            console.log(user.providerData[0].photoURL);
            console.log(user.providerData[0].phoneNumber);
            console.log(user.providerData[0].uid); // id para identificar de forma exclusiva a su usuario en la base de datos de usuarios de su proyecto de Firebase
        } else {
            console.error("LogOut");
        }
        // console.log(user);
    })

    const onAuthGoogle = () => {
        signInWithRedirect(auth, provider);
        unsubscribe();
    }

    const onAuthFaceebook = () => {
        signInWithRedirect(auth, providerFace);
        unsubscribe();
    }

    const logOutAll = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("LogOut")
        }).catch((error) => {
            console.log("Ocurrio un error!!!")
        });
    }

    return (
        <View style={styles.container}>
            <Button onPress={onAuthGoogle}>Sign-in with Google</Button>
            <Button onPress={onAuthFaceebook}>Sign-in with Facebook</Button>
            <Button onPress={logOutAll}>LogOut</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
});

export default Login;
