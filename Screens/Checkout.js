import React from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkout = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 15, alignItems: "center" }}>
                <MaterialCommunityIcons name="chevron-left" color={"#00316E"} size={25} />
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: "bold" }}> Checkout</Text>
            </View>
            <ScrollView style={{ flex: 2, backgroundColor: '#fff' }}>
                <FlatList
                    data={[
                        { key: 'Pumpkin', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "1Kg", review: "255" }, { key: 'Sunflower Oil', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "3Kg", review: "120" }, { key: 'Cauliflower', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" }, { key: 'Cauliflower', uri: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg", kg: "5Kg", review: "100" }


                    ]}
                    renderItem={({ item }) =>
                        <View style={{ backgroundColor: "#fff", flex: 1, marginHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row', margin: 5, alignItems: "center" }}>
                                <View style={{ flex: 0.5, backgroundColor: "#E9F9E8", padding: 20, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={{ uri: item.uri }} style={{ height: 50, width: 50 }} resizeMode="cover" />
                                </View>
                                <View style={{ flex: 3, backgroundColor: '#fff', marginLeft: 10, }}>
                                    <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}>{item.key}</Text>
                                    <Text style={{ fontSize: 13, color: 'grey  ', fontWeight: 'bold' }}>{item.kg}    4.6 {item.review} (reviews)</Text>
                                    <Text style={{ fontSize: 13, color: 'grey', }}>1 x $60</Text>
                                </View>
                            </View>




                        </View>

                    }

                />

            </ScrollView>
            <View style={{ flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 10 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: "row", margin: 15 }}>
                    <Text style={{ fontSize: 15, color: '#00316E', }}> SubTotal</Text>
                    {/* <Text style={{ fontSize: 15, color: '#00316E', }}> :</Text> */}
                    <Text style={{ fontSize: 15, color: '#00316E', }}> $100.10</Text>


                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: "row", margin: 15 }}>
                    <Text style={{ fontSize: 15, color: '#00316E', }}>Shipping Fee</Text>
                    {/* <Text style={{ fontSize: 15, color: '#00316E', }}> :</Text> */}
                    <Text style={{ fontSize: 15, color: '#00316E', }}>$0.000</Text>


                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: "row", margin: 15 }}>
                    <Text style={{ fontSize: 15, color: '#00316E', }}> Estimating Tax</Text>
                    {/* <Text style={{ fontSize: 15, color: '#00316E', }}> :</Text> */}
                    <Text style={{ fontSize: 15, color: '#00316E', }}>$80.00</Text>


                </View>
                <Text style={{ marginLeft: 10 }} numberOfLines={1}>
                    ______________________________________________________________

                </Text>
                <View style={{ justifyContent: 'space-between', flexDirection: "row", margin: 15 }}>
                    <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold', }}>Total</Text>

                    <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold', }}> $80.00</Text>


                </View>
                <View style={{ backgroundColor: "#32CD32", padding: 18, marginLeft: 60, marginRight: 60, borderRadius: 10, marginTop: 50 }}>
                    <Text style={{ textAlign: "center", color: '#fff', fontSize: 20 }} >Next</Text>
                </View>


            </View>
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
