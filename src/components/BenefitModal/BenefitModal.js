import {
  Text, View, Modal, TouchableOpacity,
} from 'react-native';
import { styles } from '../../../appStyles';

const BenefitModal = ({ isModalOpen, setisModalOpen }) => {
  const isStaff = true;
  const code = '6S21S5A5S1';
  return (
    <Modal visible={isModalOpen} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBackground}>
          <View style={{ height: '100%', justifyContent: `${isStaff ? 'space-between' : 'space-evenly'}` }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {isStaff
                ? 'Para acceder a este descuento, enviar el código a nuestro equipo de Custom Care.'
                : 'Usted no cuenta con los beneficios necesarios para acceder a este beneficio.'}
            </Text>
            {
              isStaff
                ? <Text style={styles.modalCode}>{code}</Text>
                : <></>
            }
            <TouchableOpacity onPress={() => setisModalOpen(false)} style={styles.modalCloseButton}>
              <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal >
  );
};
export default BenefitModal;
