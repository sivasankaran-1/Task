import { StyleSheet, Text, View,Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React,{useState} from 'react';
import Logo from '../assets/images/Logo_1.png'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import auth from "@react-native-firebase/auth";
const SignupScreen = ({navigation}) => {
  const [username,setusername] = useState("")
  const[password,setpassword] = useState("")
  const[email,setemail] = useState("")
  const [Address,setAddress] = useState("")
  const [mobile,setmobile] = useState("")
  
  
  const onpresssignin =()=>{
    if (username=="" || username.length<5){
      alert("Please Enter Valid Username")
    }
    else if(email =="" ){
      alert("Please Enter Valid email")

    }else if(Address ==""){
      alert("Please Enter Valid Address")

    }
    else if(mobile =="" || mobile.length<10){
      alert("Please Enter Valid Mobile Number")

    }
    else if(password =="" || password.length<8){
      alert("Please Enter Valid Address must have 8 digits")

    }
    else{
      auth().createUserWithEmailAndPassword(
        email,
        password
      ).then((user)=>{
        console.log(user.uid)
        if (user) {
          console.log(user.phoneNumber)
          auth()
            .currentUser.updateProfile({
              displayName: username,
            
             
            })
            .then(() => navigation.navigate("Login"))
            .catch((error) => {
              alert(error);
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          alert(
            "That email address is already in use!"
          );
        } else {
          alert(error.message);
        }
 
      })
    }
   
  } 
  return (
    <View style={styles.root}>
    <Image source={Logo} style={[styles.logo]} resizeMode="contain"/>
  
     <CustomInput placeholder="Username" value={username} setValue={setusername}/>
     <CustomInput placeholder="Email" value={email} setValue={setemail}/>
     <CustomInput placeholder="Address" value={Address} setValue={setAddress}/>
     <CustomInput placeholder="Mobile Number" value={mobile} setValue={setmobile}/>
     <CustomInput placeholder="Password" value={password} setValue={setpassword} secureTextEntry={true}/>
     <CustomButton text="Signup" onpress={onpresssignin}/>
     <Text style={styles.dontxt}>Already have an account? <Text style={{color:"#3B71F3"}} onPress={()=>navigation.navigate("Login")}>Login</Text></Text>
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
