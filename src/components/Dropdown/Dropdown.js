import {
  View, Text, Image, TouchableOpacity, Platform,
} from 'react-native';
import React from 'react';

const Dropdown = () => {
  return (
    < View style={{
      position: 'absolute',
      width: 200,
      height: 105,
      backgroundColor: '#fff',
      top: 42,
      right: 2,
      borderRadius: 5,
      padding: 8,
      zIndex: 100,
      elevation: (Platform.OS === 'android') ? 100 : 0,
      borderWidth: 0.5,
      borderColor: '#dbdbdb',
    }}>
      <View>
        <Text style={{ fontSize: 11, color: '#5E6C84' }}>Cuenta</Text>
        <View style={{ flexDirection: 'row', marginTop: 3 }}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/a/ALm5wu2ID_H9jjgmDHGS1Z9btE76gAoImdbiJqj9MUO43w=s288-p-rw-no-mo' }}
            style={{ width: 36, height: 36, borderRadius: 100 }}
          />
          <View style={{
            marginLeft: 5, flex: 1, justifyContent: 'center',
          }}>
            <Text style={{ fontSize: 12, color: '#172b4d' }}>Juan Ignacio Cansillieri</Text>
            <Text style={{ marginHorizontal: 2, fontSize: 10, color: '#5E6C84' }}>juancansi@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginVertical: 7,
            borderBottomWidth: 1,
            borderBottomColor: '#dbdbdb',
          }}
        />

      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 12, color: '#172b4d' }}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default Dropdown;
