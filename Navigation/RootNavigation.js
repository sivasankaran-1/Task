import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import ContactUs from '../Screens/ContactUs';

import Splash from '../Screens/Splash';

import BottomNavigation from './BottomNavigation';


const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='splash'>
      {/* <Stack.Screen name="splash" component={Splash} /> */}
      <Stack.Screen name="Login" component={BottomNavigation} />
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
    </Stack.Navigator>
    
  </NavigationContainer>
  );
};

export default RootNavigation;
