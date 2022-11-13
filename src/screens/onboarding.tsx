import React, {useState, useRef} from 'react';
import Scaffold from '../fragment/scaffold';
import {
  FlatList,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {slides} from '../components/onboard/slides';
import OnboardItems from '../components/onboard/onboarding';
import Paginator from '../components/onboard/paginator';
import NextButton from '../components/onboard/NextButton';

const Onboarding = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const styles = StyleSheet.create({
    container: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slider: {
      height: height * 0.55,
    },
  });

  return (
    <Scaffold showStatus={false}>
      <View style={styles.container}>
        <View style={styles.slider}>
          <FlatList
            data={slides}
            renderItem={({item}) => <OnboardItems item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={true}
            keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={50}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <Paginator data={slides} currentSlideIndex={currentIndex} />
        <NextButton />
      </View>
    </Scaffold>
  );
};

export default Onboarding;
