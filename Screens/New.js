import React,{useEffect,useState} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import RazorpayCheckout from 'react-native-razorpay';
const OrderCheckout = () => {
    let [listData, setListData] = useState([]);

    useEffect(() => {
        firestore()
          .collection('Products')
          .get()
          .then((querySnapshot) => {
           
            let temp = [];
            console.log('Total users: ', querySnapshot.size);
            querySnapshot.forEach((documentSnapshot) => {
              console.log('user Id: ', documentSnapshot.id);
            
              let userDetails = {};
              // Document fields
              userDetails = documentSnapshot.data();
             
              userDetails['id'] = documentSnapshot.id;
              temp.push(userDetails);
              console.log(temp)
              setListData(temp);
            });
          });
      }, []);

    const Onrozar =()=>{
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_fdUsdyiZ3r1iJE', // Your api key
            amount: '5000' *100,
            name: 'PYAAR MINT',
            // method:"netbanking",
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: '',
           
            },
            theme: {color: '#00316E'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
    }
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 15, alignItems: "center" }}>
                <MaterialCommunityIcons name="chevron-left" color={"#00316E"} size={25} />
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: "bold" }}>order History</Text>
            </View>

            <Text style={{ fontSize: 18, color: '#00316E', fontWeight: 'bold', marginLeft: 20, marginTop: 15 }}>Orders</Text>
            <FlatList
                data={listData}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: "#fff", flex: 1, marginHorizontal: 13, marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', margin: 5, alignItems: "center" }}>
                            <View style={{ flex: 0.5, backgroundColor: "#E9F9E8", padding: 20, justifyContent: 'center', alignItems: "center" }}>
                                <Image source={{ uri: item.uri }} style={{ height: 50, width: 50 }} resizeMode="cover" />
                            </View>
                            <View style={{ flex: 3, backgroundColor: '#fff', marginLeft: 10, }}>
                                <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}>{item.ProductName}</Text>
                                <Text style={{ fontSize: 13, color: 'grey', fontWeight: 'bold' }}>{item.price} RS</Text>
                              
                            </View>
                        </View>




                    </View>

                }

            />
      



        </ScrollView >
    )
}

export default OrderCheckout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

})
