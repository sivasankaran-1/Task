import React from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper'
import RazorpayCheckout from 'react-native-razorpay';
const OrderCheckout = () => {

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
                data={[
                    { key: 'Pumpkin', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "1Kg", review: "255" }, { key: 'Cauliflower', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" },


                ]}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: "#fff", flex: 1, marginHorizontal: 13, marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', margin: 5, alignItems: "center" }}>
                            <View style={{ flex: 0.5, backgroundColor: "#E9F9E8", padding: 20, justifyContent: 'center', alignItems: "center" }}>
                                <Image source={{ uri: item.uri }} style={{ height: 50, width: 50 }} resizeMode="cover" />
                            </View>
                            <View style={{ flex: 3, backgroundColor: '#fff', marginLeft: 10, }}>
                                <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}>{item.key}</Text>
                                <Text style={{ fontSize: 13, color: 'grey', fontWeight: 'bold' }}>{item.kg}    4.6 {item.review} (reviews)</Text>
                                <Text style={{ fontSize: 13, color: 'grey', fontWeight: 'bold' }}>1 x $60</Text>
                            </View>
                        </View>




                    </View>

                }

            />
            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: 'bold', marginLeft: 20, marginTop: 25 }}>Shipping Address</Text>
                <Text style={{ fontSize: 15, color: 'grey', fontWeight: '', marginLeft: 20, marginTop: 15, width: 200 }}>periyapalayatheamman koil street,uppalam, puducherry</Text>
                {/* <Text style={{ fontSize: 18, color: '#00316E', fontWeight: 'bold', marginLeft: 20, marginTop: 50 }}>Payment</Text> */}
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{ fontSize: 15, color: 'grey', fontWeight: '', marginLeft: 20, marginTop: 15, }}>**** **** **** 2658 </Text>
                    <Image source={{ uri: "https://cdn.vox-cdn.com/thumbor/zqrc6MN4NHTgAEU03-zuXiUBEYw=/0x248:1000x772/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" }} style={{ height: 20, width: 50, marginRight: 20 }} />
                </View> */}
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: 'bold', marginLeft: 20, marginTop: 50 }}>Total : $897</Text>
                <View style={{ backgroundColor: "#32CD32", padding: 15, marginHorizontal: 60, bottom: 0, marginTop: 50, borderRadius: 10 }} onStartShouldSetResponder={Onrozar}>
                    <Text style={{ textAlign: "center", color: '#fff', fontWeight: 'bold' }}>Place Order</Text>
                </View>
            </View>



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
