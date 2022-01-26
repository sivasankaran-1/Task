import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './Screens/Home'
import Checkout from './Screens/Checkout';

import Profile from './Screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons'
import OrderCheckout from './Screens/New';

import Payments from './Screens/Payment';

import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgotPassword from './Screens/ForgotPassword';




const Tab = createBottomTabNavigator();

function App() {
  const customTabBarStyle = {
    activeTintColor: '#00316E',
    inactiveTintColor: 'gray',
    style: { backgroundColor: 'white' },
  }
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={customTabBarStyle} initialRouteName="Home" tabBarOptions={{ keyboardHidesTabBar: true }} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }} />
        <Tab.Screen name="Orders" component={LoginScreen} options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-reader-outline" color={color} size={25} />
          ),
        }} />
        <Tab.Screen name="center" component={SignupScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
            
                height: 50,
                width: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#32CD32"
              }}
            >
              <Icon name="briefcase-outline" size={30} color={"white"} />
            </View>
          )
        }} />
        <Tab.Screen name="Wishlist" component={ForgotPassword} options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={25} />
          ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;