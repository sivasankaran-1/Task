import { StyleSheet, Text, View,Image, useWindowDimensions } from 'react-native';
import React,{useState} from 'react';
import Logo from '../assets/images/Logo_1.png'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';



const LoginScreen = ({navigation}) => {
  const [username,setusername] = useState("")
  const[password,setpassword] = useState("")
  
    const height = useWindowDimensions();

   const onpressLogin =()=>{
     console.log("ok")
          navigation.navigate("Main")
   } 
   const onforgotPress =()=>{
     navigation.navigate("Forgot")
   }
  return (
    <View style={styles.root}>
     <Image source={Logo} style={[styles.logo]} resizeMode="contain"/>
     <CustomInput placeholder="Username" value={username} setValue={setusername}/>
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
