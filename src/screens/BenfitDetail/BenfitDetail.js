import React from 'react';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

const BenfitDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: item.url }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          { item.descripcion }
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerButton}>Inscribirse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BenfitDetail;
