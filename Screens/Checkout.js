import React,{useEffect,useState} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Image,Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Checkout = ({navigation}) => {
    let [Cartdata, setCartdata] = useState([]);
    useEffect(() => {

        let UID = auth().currentUser.uid
        console.log(UID)
        firestore()
          .collection('Cart')
        //   .doc(auth().currentUser.uid)
          .get()
          .then((querySnapshot) => {
           
            let temp = [];
           
            querySnapshot.forEach((documentSnapshot) => {
            //   console.log('user Id: ', documentSnapshot.id);
            
              let userDetails = {};
       
              userDetails = documentSnapshot.data();
             
              userDetails['id'] = documentSnapshot.id;
              temp.push(userDetails);
              console.log(temp)
              const data = temp.filter(el=>el.uid===UID)
              console.log(data)
              
              setCartdata(data)
         
            });
          });
      }, []);



    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 15, alignItems: "center" }}>
                <MaterialCommunityIcons name="chevron-left" color={"#00316E"} size={25} onPress={()=>navigation.goBack()}/>
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: "bold" }}> Checkout</Text>
            </View>
            <ScrollView style={{ flex: 2, backgroundColor: '#fff' }}>
                <FlatList
                    data={Cartdata}
                    renderItem={({ item }) =>
                        <View style={{ backgroundColor: "#fff", flex: 1, marginHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row', margin: 5, alignItems: "center" }}>
                                <View style={{ flex: 0.5, backgroundColor: "#E9F9E8", padding: 20, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={{ uri: item.uri }} style={{ height: 50, width: 50 }} resizeMode="cover" />
                                </View>
                                <View style={{ flex: 3, backgroundColor: '#fff', marginLeft: 10, }}>
                                <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}>{item.ProductName}</Text>
                                <Text style={{ fontSize: 13, color: 'grey', fontWeight: 'bold' }}>{item.Price} RS</Text>
                                <Pressable >
                                <Text style={{padding:10,backgroundColor:"red",width:90,borderRadius:5,marginVertical:10,color:"white"}}>REMOVE</Text>
                                </Pressable>
                                </View>
                            </View>




                        </View>

                    }

                />

            </ScrollView>
           
        </ScrollView>
    )
}

export default Checkout


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

})
