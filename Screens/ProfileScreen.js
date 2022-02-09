import {StyleSheet, Text, View,Button} from 'react-native';
import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = ({navigation}) => {
  const [username,setusername] = useState(auth().currentUser.displayName)
  const [email,setemail] = useState(auth().currentUser.email)
  const [mobile,setmobile] = useState()
  const onpressLogout =()=>{
    console.log("Logout")
    navigation.navigate("Login")
    AsyncStorage.setItem("mobile","")
  }

  useEffect( () => {
    AsyncStorage.getItem("mobile").then((value) => {
     setmobile(value)
  })
   
  }, []);
  
  return (
    <View style={styles.root}>
      <View style={{padding:20,backgroundColor:"#fff",marginVertical:120,marginHorizontal:20,borderRadius:10,elevation:10}}>
        <Text style={styles.contacttxt}>PROFILE</Text>
        <Text style={styles.info}>NAME : <Text style={{color:"#000"}}>{username}</Text></Text>
        <Text style={styles.info}>EMAIL : <Text style={{color:"#000"}}>{email}</Text></Text>
        <Text style={styles.info}>MOBILE : <Text style={{color:"#000"}}>{mobile}</Text></Text>
        {/* <Text style={styles.info}>FACEBOOK :</Text> */}
        {/* <Text style={styles.info}>INSTAGRAM :</Text> */}
        <Button title='Logout' color={"red"} onPress={onpressLogout}/>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    justifyContent:"center"
  },

  contacttxt: {
    fontSize: 28,
    color: '#00316E',
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  info: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#00316E',
    marginVertical: 15,
    marginHorizontal: 5,
  },
});
