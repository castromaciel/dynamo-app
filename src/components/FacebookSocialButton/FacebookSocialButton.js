import React from 'react';
import {
  Text, TouchableOpacity, Image,
} from 'react-native';
import { styles } from './facebookSocialButtonStyles';

const FacebookSocialButton = () => {
  return (
    <TouchableOpacity
        style={{ ...styles.facebookStyle, ...this.props.buttonViewStyle }}
        onPress={this.props.onPress}
      >
        <Image
          source={require('../../../assets/img/facebook.png')}
          style={{ ...styles.imageIconStyle, ...this.props.logoStyle }}
        />
        <Text style={{ ...styles.textStyle, ...this.props.textStyle }}>
          {this.props.buttonText
            ? this.props.buttonText
            : 'Sign in with Facebook'}
        </Text>
      </TouchableOpacity>
  );
};

export default FacebookSocialButton;
