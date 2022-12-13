import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View, Image, TouchableOpacity, Platform,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../slices/userSlice';
import { Dropdown } from '../Dropdown';

const Navbar = () => {
  const activeUser = useSelector(selectUser);
  const navigation = useNavigation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <View style={{
      marginVertical: 35,
      elevation: 10,
      zIndex: 10,
    }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={require('../../../assets/img/rc.png')}
            resizeMode='contain'
            style={{ marginHorizontal: 10 }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
          <TouchableOpacity onPress={() => { setIsDropdownVisible(!isDropdownVisible); }}>
            <Image
              source={{ uri: activeUser.avatar }}
              resizeMode='contain'
              style={{ height: 40, width: 40, borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View >
      {
        isDropdownVisible && (<Dropdown />)
      }
    </View >
  );
};

export default Navbar;
