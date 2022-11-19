import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import { GoogleAuthProvider, getAuth, signInWithRedirect  } from "firebase/auth";

// import { getFirestore } from "firebase/firestore";
import app from '../../firebase';


const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    // const db = getFirestore(Login);

    const onAuthGoogle = () => {
        signInWithRedirect(auth, provider);
    }
    return (
        <View style={styles.container}>
            {/* <Text>Login</Text> */}
            {/* <Button title="Sign-in with Google" onPress={onAuth}/> */}
            <Button onPress={onAuthGoogle}>Sign-in with Google</Button>
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

export default Login