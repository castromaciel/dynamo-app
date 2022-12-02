import React from 'react';
import {
  Text, TouchableOpacity, Image,
} from 'react-native';
import { styles } from './googleSocialButtonStyle';

const GoogleSocialButton = ({
  buttonViewStyle = '', logoStyle = '', textStyle = '', buttonText = '', onPress = () => {},
}) => {
  const buttonStyles = { ...styles.googleStyle, ...buttonViewStyle };
  const imageStyles = { ...styles.imageIconStyle, ...logoStyle };
  const textStyles = { ...styles.textStyle, ...textStyle };
  return (
      <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
      >
        <Image
          source={require('../../../assets/img/google.png')}
          style={imageStyles}
        />
        <Text style={textStyles}>
          {buttonText || 'Sign in with Google'}
        </Text>
      </TouchableOpacity>
  );
};

export default GoogleSocialButton;
