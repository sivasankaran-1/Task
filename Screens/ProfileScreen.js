import {StyleSheet, Text, View,Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  const onpressLogout =()=>{
    console.log("Logout")
    navigation.navigate("Login")
  }
  return (
    <View style={styles.root}>
      <View style={{padding:20,backgroundColor:"#fff",marginVertical:120,marginHorizontal:20,borderRadius:10,elevation:10}}>
        <Text style={styles.contacttxt}>PROFILE</Text>
        <Text style={styles.info}>NAME : <Text style={{color:"#000"}}>Name get from firebase</Text></Text>
        <Text style={styles.info}>EMAIL : <Text style={{color:"#000"}}>email from firebase</Text></Text>
        <Text style={styles.info}>MOBILE : <Text style={{color:"#000"}}>number get from async</Text></Text>
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
