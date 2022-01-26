import { StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native';
import React,{useState} from 'react';
import Logo from '../assets/images/Logo_1.png'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
const SignupScreen = () => {
  const [username,setusername] = useState("")
  const[password,setpassword] = useState("")
  const[email,setemail] = useState("")
  const [Address,setAddress] = useState("")
  const onpresssignin =()=>{
    console.log("ok")
  } 
  return (
    <View style={styles.root}>
    <Image source={Logo} style={[styles.logo]} resizeMode="contain"/>
     <CustomInput placeholder="Username" value={username} setValue={setusername}/>
     <CustomInput placeholder="Email" value={email} setValue={setemail}/>
     <CustomInput placeholder="Address" value={Address} setValue={setAddress}/>
     <CustomInput placeholder="Password" value={password} setValue={setpassword} secureTextEntry={true}/>
     <CustomButton text="Signup" onpress={onpresssignin}/>
     <Text style={styles.dontxt}>Already have an account? <Text style={{color:"#3B71F3"}}>Login</Text></Text>
    </View>
  );
};

export default SignupScreen;

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
dontxt:{
  fontWeight:"bold",
  color:'black',
  marginVertical:10

}
});
