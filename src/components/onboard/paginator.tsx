import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {custom_color} from '../../contexts/themeContext';

const Paginator = ({data, currentSlideIndex}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    dot: {
      backgroundColor: theme.colors.border,
      height: 10,
      width: 10,
      borderRadius: 5,
      marginHorizontal: 8,
    },
    active: {
      backgroundColor: custom_color(theme.dark)?.success_outline,
    },
  });

  return (
    <View style={{flexDirection: 'row', height: 20, marginTop: 20}}>
      <Text>{data.id}</Text>
      {data?.map((_, i) => {
        return (
          <View
            style={[styles.dot, currentSlideIndex === i ? styles.active : null]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
