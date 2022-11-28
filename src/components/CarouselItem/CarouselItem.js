import {
  TouchableOpacity, Text,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './styles';

const CarouselItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => console.log('click')}
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
          onPress={() => console.log(item.url)}
        >
          <Text style={styles.footerButton}>
            {item.buttonLabel}
          </Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

export default CarouselItem;
