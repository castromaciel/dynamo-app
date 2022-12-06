import React, { useState } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import { Dropdown } from '../Dropdown';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
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
          <TouchableOpacity onPress={() => { setIsDropdownVisible(!isDropdownVisible); }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/a/ALm5wu2ID_H9jjgmDHGS1Z9btE76gAoImdbiJqj9MUO43w=s288-p-rw-no-mo' }}
              resizeMode='contain'
              style={{ height: 40, width: 40, borderRadius: 100 }}
            />
          </TouchableOpacity>
          {
            isDropdownVisible && <Dropdown />
          }
        </View>
      </View >
      <View>
        <Text style={{ padding: 20, fontWeight: '500' }}>Hola, Juan👋</Text>
      </View>
    </View >
  );
};

export default Navbar;
