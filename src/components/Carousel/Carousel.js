import { useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import carouselItem from '../../../assets/carouselItem.json';
import { CarouselItem } from '../CarouselItem';
import { styles } from './styles';

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
const Carousel = () => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <View
      style={styles.carouselContainer}
    >
      <FlatList
        data={carouselItem}
        renderItem={CarouselItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dotView}>
        {
          carouselItem.map((_, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={[
                styles.circle,
                { backgroundColor: index === currentIndex ? '#000' : 'grey' },
              ]}
              onPress={() => scrollToIndex(index)}
            />
          ))
        }
      </View>

    </View>
  );
};

export default Carousel;
