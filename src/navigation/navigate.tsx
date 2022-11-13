import * as React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Launch from '../screens/launch';
import Onboarding from '../screens/onboarding';
import {light_theme, dark_theme} from '../contexts/themeContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? dark_theme : light_theme}>
      <Stack.Navigator initialRouteName={'Onboarding'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Launch"
          component={Launch}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboard"
          component={Onboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
