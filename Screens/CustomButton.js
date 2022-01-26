import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomButton = ({onpress,text}) => {
  return (
    <Pressable onPress={onpress} style={styles.container}>
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#3B71F3",
        width:"100%",
        padding:15,
        marginVertical:5,
        alignItems:"center",
        borderRadius:5

    },
    button:{
      fontWeight:'bold',color:"white"  
    }
});
