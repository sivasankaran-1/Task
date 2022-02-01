import { StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native';
import React,{useState} from 'react';
import Logo from '../assets/images/Logo_1.png'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import auth from "@react-native-firebase/auth";
const ForgotPassword = ({navigation}) => {
    const [email,setemail] = useState("")
    const sendEmail =()=>{
       if(email ==""){
         alert("Please Enter Valid Email")
       }
       else{
         auth().sendPasswordResetEmail(email).then((user)=>{
           console.log("ok")
           alert("Please check your Email")
         }).catch((e)=>{
           console.log(e)
         })

       }
    }
    const BacktoLogin =()=>{
        console.log("login")
        navigation.navigate("Login")
    }
  return (
    <View style={styles.root}>
        <Image source={Logo} style={[styles.logo]} resizeMode="contain"/>
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
    logo:{
      width:"70%",
      maxWidth:300,
      maxHeight:200
  },
});
