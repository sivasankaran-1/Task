import { StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native';
import React,{useState} from 'react';
import Logo from '../assets/images/Logo_1.png'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import auth from "@react-native-firebase/auth";

const LoginScreen = ({navigation}) => {
  const [useremail,setuseremail] = useState("")
  const[password,setpassword] = useState("")
  
    const height = useWindowDimensions();

   const onpressLogin =()=>{
     if(useremail =="" ){
       alert("Please Enter Valid Email")

     }
     else if(password==""){
      alert("Please Enter Valid Password")
     }
     else{
       auth().signInWithEmailAndPassword(
         useremail,password
       ).then((user)=>{
         console.log(user)
         navigation.navigate("Main")
       }).catch((e)=>{
         alert(e)
       })
     }
   } 
   const onforgotPress =()=>{
     navigation.navigate("Forgot")
   }
  return (
    <View style={styles.root}>
     <Image source={Logo} style={[styles.logo]} resizeMode="contain"/>
     <CustomInput placeholder="Useremail" value={useremail} setValue={setuseremail}/>
     <CustomInput placeholder="Password" value={password} setValue={setpassword} secureTextEntry={true}/>
     <CustomButton text="Login" onpress={onpressLogin}/>
     <CustomButton text="Forgot Paasword" onpress={onforgotPress}/>

     <Text style={styles.dontxt}>Dont have an account? <Text style={{color:"#3B71F3"}} onPress={()=>navigation.navigate("Register")}>Create One</Text></Text>

    </View>
  );
};

export default LoginScreen;

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
