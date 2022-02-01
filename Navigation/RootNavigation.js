import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { TransitionSpecs,CardStyleInterpolators  } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import ContactUs from '../Screens/ContactUs';

import Splash from '../Screens/Splash';

import BottomNavigation from './BottomNavigation';


const Stack = createNativeStackNavigator();
const RootNavigation = () => {

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='splash'>
      <Stack.Screen name="splash" component={Splash} options={{headerShown:false, transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
    ,}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false,transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    }}}/>
      <Stack.Screen name="Register" component={SignupScreen} options={{transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    }}} />
      <Stack.Screen name="Forgot" component={ForgotPassword} options={{transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    }}}/>
      <Stack.Screen name="Main" component={BottomNavigation} options={{headerShown:false,transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    }}}/>
      
    </Stack.Navigator>
    
  </NavigationContainer>
  );
};

export default RootNavigation;
