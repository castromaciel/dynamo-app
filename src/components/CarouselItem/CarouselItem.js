import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity, Text,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './styles';

const CarouselItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.carouselItem}
    >
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={item.title}
          source={{ uri: item.url }}
          style={styles.image}
        />
        <Card.Content style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                'Benefit Modal',
                { item },
              );
            }}
          >
            <Text style={styles.footerButton}>
              {item.buttonlabel}
            </Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default CarouselItem;
