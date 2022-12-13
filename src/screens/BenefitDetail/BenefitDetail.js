import React, { useState } from 'react';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import { BenefitModal } from '../../components';
import { DefaultScreen } from '../../layout';
import { styles } from './styles';

const BenfitDetail = ({ route }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const { item } = route.params;
  const isStaff = item.onlystaff;
  const { id } = item;
  return (
    <DefaultScreen style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: item.url }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          {item.descripcion}
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setisModalOpen(true)}>
          <Text style={styles.footerButton}>Inscribirse</Text>
        </TouchableOpacity>
      </View>
      <BenefitModal
        transparent
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
        isStaff={isStaff}
        id={id}
      />
    </DefaultScreen>
  );
};
export default BenfitDetail;
