import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {custom_color} from '../../contexts/themeContext';
import {useTheme} from '@react-navigation/native';

const NextButton = props => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 3,
      paddingHorizontal: 8,
      borderRadius: 12,
      flexDirection: 'row-reverse',
      backgroundColor: custom_color(theme.dark)?.success_outline,
    },
  });
  return (
    <View style={{alignSelf: 'flex-end', paddingRight: 25, marginTop: 15}}>
      <TouchableOpacity style={styles.container} onPress={props.next}>
        <Text style={{color: 'rgb(255,255,255,1)'}}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
