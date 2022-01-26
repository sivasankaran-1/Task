import { StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native';
import React,{useState} from 'react';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
const ForgotPassword = () => {
    const [email,setemail] = useState("")
    const sendEmail =()=>{
        console.log("Ok")
    }
    const BacktoLogin =()=>{
        console.log("login")
    }
  return (
    <View style={styles.root}>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#3B71F3'}}>Confirm Your Email</Text>
      <CustomInput placeholder="Enter your Email" value={email} setValue={setemail}/>
      <CustomButton text="Confirm" onpress ={sendEmail}/>
      <CustomButton text="Back to Login" onpress ={BacktoLogin}/>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,flex:1,backgroundColor:"#F9FBFC"
    },
});