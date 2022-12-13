import {
  Text, View, Modal, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../../../appStyles';
import { selectUser } from '../../../slices/userSlice';

const BenefitModal = ({
  isModalOpen, isStaff, setisModalOpen, id,
}) => {
  const activeUser = useSelector(selectUser);
  const userRole = () => {
    if (activeUser.role === 'user' && isStaff) { return false; } else return true;
  };
  const code = id.slice(0, 16);
  return (
    <Modal visible={isModalOpen} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBackground}>
          <View style={{ height: '100%', justifyContent: `${userRole() ? 'space-between' : 'space-evenly'}` }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {userRole()
                ? 'Para acceder a este descuento, enviar el código a nuestro equipo de Custom Care.'
                : 'Usted no cuenta con los beneficios necesarios para acceder a este beneficio.'}
            </Text>
            {
              userRole()
                ? <Text style={styles.modalCode}>{code}</Text>
                : null
            }
            <TouchableOpacity
              onPress={() => setisModalOpen(false)} style={styles.modalCloseButton}>
              <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal >
  );
};
export default BenefitModal;
