import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './appStyles';
import BenefitModal from './src/components/BenefitModal/BenefitModal';

const App = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <BenefitModal transparent isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
    </View>
  );
};

export default App;
