import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const OnboardItems = ({item}) => {
  const {width} = useWindowDimensions();

  const styles = StyleSheet.create({
    subtitle: {
      fontSize: 14,
      fontWeight: 'normal',
      color: 'blue',
      padding: 20,
      textAlign: 'center',
    },
    image: {
      height: 300,
      width: width,
      padding: 0,
      margin: 0,
    },
  });

  return (
    <View style={{width, padding: 0}}>
      <Image source={item?.image} style={styles.image} resizeMode={'contain'} />
      <Text style={styles.subtitle}>{item?.subtitle}</Text>
    </View>
  );
};

export default OnboardItems;
