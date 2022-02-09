import { StyleSheet, Text, View,Image } from 'react-native';
import React,{useEffect,useState} from 'react';
import Logo from '../assets/images/Logo_1.png'
import auth from "@react-native-firebase/auth";

const Splash = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.push("Login")
     
    }, 2000);
  }, []);
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
