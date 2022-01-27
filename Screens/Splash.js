import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Logo from '../assets/images/Logo_1.png'

const Splash = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo]} resizeMode="contain"/>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
    root:{
        justifyContent:"center",
        backgroundColor:"#F9FBFC",
        flex:1,
        alignItems:"center"
    },
    logo:{
        width:"50%",
        maxWidth:300,
        maxHeight:200
    },
});
