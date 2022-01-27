import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactUs = () => {
  return (
    <View style={styles.root}>
      <View style={{padding:20,backgroundColor:"#fff",marginVertical:120,marginHorizontal:20,borderRadius:10,elevation:10}}>
        <Text style={styles.contacttxt}>Contact Us</Text>
        <Text style={styles.info}>ADDRESS : <Text style={{color:"#000"}}>No,66 A Kamaraj Street, 1 st Cross, Murungapakkam, Puducherry-04</Text></Text>
        <Text style={styles.info}>EMAIL : <Text style={{color:"#000"}}>pyaar05jan22@gmail.com</Text></Text>
        <Text style={styles.info}>MOBILE : <Text style={{color:"#000"}}>8870980225</Text></Text>
        {/* <Text style={styles.info}>FACEBOOK :</Text> */}
        {/* <Text style={styles.info}>INSTAGRAM :</Text> */}
      </View>
    </View>
  );
};

export default ContactUs;

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
