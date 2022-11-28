import React from 'react';
import {
  View, Image, Text,
} from 'react-native';

const Navbar = () => {
  return (
    <View style={{ marginVertical: 35 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../../assets/rc.png')}
          resizeMode='contain'
          style={{ marginHorizontal: 10 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
          <Text style={{ marginHorizontal: 10 }}>Juan</Text>
          <Image
            source={require('../../../assets/circle.png')}
            resizeMode='contain'
          />
        </View>
      </View>
      <View>
        <Text style={{ padding: 20, fontWeight: '500' }}>Hola, Juan👋</Text>
      </View>
    </View>
  );
};

export default Navbar;
