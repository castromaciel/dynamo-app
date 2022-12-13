import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../slices/userSlice';
import { styles } from './styles';

const Dropdown = () => {
  const activeUser = useSelector(selectUser);
  const navigation = useNavigation();

  const logOut = () => {
    const authA = getAuth();
    signOut(authA).catch((error) => {
      console.error('Ocurrio un error!!!', error);
    });
  };

  const showAlert = () => Alert.alert(
    'Cerrar Sesión',
    'Está seguro que quiere cerrar sesión?',
    [
      {
        text: 'Confirmar',
        onPress: () => {
          logOut();
          navigation.navigate('Login');
        },
        style: 'cancel',
      },
      {
        text: 'Cancelar',
        style: 'default',
      },
    ],

    {
      cancelable: true,
    },
  );

  return (
    < View style={styles.dropdownContainer}>
      <View>
        <Text style={{ fontSize: 11, color: '#5E6C84' }}>Cuenta</Text>
        <View style={{ flexDirection: 'row', marginTop: 3 }}>
          <Image
            source={{ uri: activeUser.avatar }}
            style={{ width: 36, height: 36, borderRadius: 100 }}
          />
          <View style={{
            marginLeft: 5, flex: 1, justifyContent: 'center',
          }}>
            <Text style={{ marginHorizontal: 2, fontSize: 12, color: '#172b4d' }}>{activeUser.fullname}</Text>
            <Text style={{ marginHorizontal: 2, fontSize: 10, color: '#5E6C84' }}>{activeUser.email}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>

      <TouchableOpacity onPress={() => showAlert()}>
        <Text style={{ fontSize: 12, color: '#172b4d', fontWeight: '500' }}>Cerrar Sesión</Text>
      </TouchableOpacity>

    </View >
  );
};

export default Dropdown;
