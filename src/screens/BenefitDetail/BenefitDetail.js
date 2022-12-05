import React, { useState } from 'react';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import { BenefitModal } from '../../components/BenefitModal';
import { styles } from './styles';

const BenfitDetail = ({ item }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: item.url }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eum tempora voluptatem, natus blanditiis quia atque numquam nobis dolorum omnis tempore.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setisModalOpen(true)}>
          <Text style={styles.footerButton}>Inscribirse</Text>
        </TouchableOpacity>
      </View>
      <BenefitModal transparent isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
    </View>
  );
};

export default BenfitDetail;
