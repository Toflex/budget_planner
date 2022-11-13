import React, { useEffect } from "react";
import Scaffold from '../fragment/scaffold';
import {Image} from 'react-native';

const Launch = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboard');
    }, 3000);
  }, []);
  return (
    <Scaffold showStatus={false}>
      <Image
        source={require('./../assets/images/app-icon.png')}
        resizeMode={'contain'}
        style={{width: 200, height: 200, marginLeft: '10%'}}
      />
    </Scaffold>
  );
};

export default Launch;
