import React from 'react';
import {
  Text, TouchableOpacity, Image,
} from 'react-native';
import { styles } from './facebookSocialButtonStyles';

const FacebookSocialButton = ({
  buttonViewStyle = '', logoStyle = '', textStyle = '', buttonText = '', onPress = () => {},
}) => {
  const buttonStyles = { ...styles.facebookStyle, ...buttonViewStyle };
  console.log(buttonStyles);
  const imageStyles = { ...styles.imageIconStyle, ...logoStyle };
  const textStyles = { ...styles.textStyle, ...textStyle };
  return (
    <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
      >
        <Image
          source={require('../../../assets/img/facebook.png')}
          style={imageStyles}
        />
        <Text style={textStyles}>
          {buttonText || 'Sign in with Facebook'}
        </Text>
      </TouchableOpacity>
  );
};

export default FacebookSocialButton;
