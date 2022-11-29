import React from 'react';
import {
  Text, TouchableOpacity, Image,
} from 'react-native';
import styles from './googleSocialButtonStyle';

const GoogleSocialButton = () => {
  return (
      <TouchableOpacity
        style={{ ...styles.googleStyle, ...this.props.buttonViewStyle }}
        onPress={this.props.onPress}
      >
        <Image
          source={require('../../../assets/img/google.png')}
          style={{ ...styles.imageIconStyle, ...this.props.logoStyle }}
        />
        <Text style={{ ...styles.textStyle, ...this.props.textStyle }}>
          {this.props.buttonText
            ? this.props.buttonText
            : 'Sign in with Google'}
        </Text>
      </TouchableOpacity>
  );
};

export default GoogleSocialButton;
