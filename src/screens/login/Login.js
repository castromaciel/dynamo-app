import React from 'react';
import { View, Image, Text } from 'react-native';
import { FacebookSocialButton, GoogleSocialButton } from '../../components';
import { styles } from './loginSytles';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <Image
        style={styles.principalImage}
        source={require('../../../assets/img/logoRolling.png')}
      />
      <View>
        <FacebookSocialButton
          buttonText={'Continuar con google'}
          onPress={() => { navigation.navigate('Dashboard'); }}
        />
        <GoogleSocialButton
          buttonText='Continuar con Google'
          onPress={() => { navigation.navigate('Dashboard'); }}
        />
      </View>
      <Text>
        Si continúas, aceptas los Términos del servicio de Dynamo y
        confirmas que has leído nuestra Política de privacidad.
      </Text>
    </View>
  );
};
export default Login;
