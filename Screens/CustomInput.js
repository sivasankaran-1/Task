import { StyleSheet, Text, View,TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
     <TextInput placeholder={placeholder} value ={value} onChangeText={setValue} style={styles.input} secureTextEntry={secureTextEntry}/>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
    container:{
      backgroundColor:"white",
      width:"100%",
      borderColor:"#e8e8e8",
      borderRadius:5,
      borderWidth:1,
      paddingHorizontal:10,
      marginVertical:10

  },
    input:{
      fontSize:17
    }
});
