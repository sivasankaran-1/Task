import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Screens/Home'
import Checkout from '../Screens/Checkout';
import ContactUs from '../Screens/ContactUs';

import OrderCheckout from '../Screens/New';

import Payments from '../Screens/Payment';

import Wishlist from '../Screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const customTabBarStyle = {
            activeTintColor: '#00316E',
            inactiveTintColor: 'gray',
            style: { backgroundColor: 'white' },
          }
          return (
       
              <Tab.Navigator tabBarOptions={customTabBarStyle} initialRouteName="Home" tabBarOptions={{ keyboardHidesTabBar: true }} screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                  tabBarLabel: 'Home',
        
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={25} />
                  ),
                }} />
                <Tab.Screen name="Orders" component={Checkout} options={{
                  tabBarLabel: 'Orders',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-reader-outline" color={color} size={25} />
                  ),
                }} />
                <Tab.Screen name="center" component={OrderCheckout} options={{
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
                <Tab.Screen name="Wishlist" component={Wishlist} options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="heart-outline" color={color} size={25} />
                  ),
                }} />
                <Tab.Screen name="Contact" component={ContactUs} options={{
                  tabBarLabel: 'Contact',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={25} />
                  ),
                }} />
              </Tab.Navigator>
           
          );
    }

export default BottomNavigation;
