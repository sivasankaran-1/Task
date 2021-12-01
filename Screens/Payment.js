import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, ScrollView, Image } from 'react-native'
import { TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Payments = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 15, alignItems: "center" }}>
                <MaterialCommunityIcons name="chevron-left" color={"#00316E"} size={25} />
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: "bold" }}> Payment</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, overflow: "scroll" }}>
                <View style={{ backgroundColor: '#fff', padding: 30, borderRadius: 10, elevation: 20, }}>

                    <Image source={{ uri: "https://cdn.vox-cdn.com/thumbor/zqrc6MN4NHTgAEU03-zuXiUBEYw=/0x248:1000x772/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" }} style={{ height: 40, width: 80, }} />
                </View>
                <View style={{ backgroundColor: '#fff', padding: 30, borderRadius: 10, elevation: 20, marginLeft: 5 }}>
                    <Image source={{ uri: "https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png" }} style={{ height: 40, width: 80, }} />

                </View>
                <View style={{ backgroundColor: '#fff', padding: 30, borderRadius: 10, elevation: 20, marginLeft: 5 }}>
                    <Image source={{ uri: "https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png" }} style={{ height: 40, width: 80, }} />
                </View>

            </View>
            <TextInput
                style={{ marginTop: 15, backgroundColor: "#fff", marginHorizontal: 20, }}
                label='Card Number'
                mode='flat'
                activeUnderlineColor="grey"
                theme={{
                    colors: {
                        placeholder: 'grey', text: '#00316E', primary: 'white',
                        underlineColor: 'grey', background: '#003489'
                    }
                }}


            />
            <TextInput
                style={{ marginTop: 15, backgroundColor: "#fff", marginHorizontal: 20, }}
                label='Card Holder Name'
                mode='flat'
                activeUnderlineColor="grey"
                theme={{
                    colors: {
                        placeholder: 'grey', text: '#00316E', primary: 'white',
                        underlineColor: 'grey', background: '#003489'
                    }
                }}

            />
            <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
                <TextInput
                    style={{ marginTop: 15, backgroundColor: "#fff", width: '40%' }}
                    label='Expiry Date'
                    mode='flat'
                    activeUnderlineColor="grey"
                    theme={{
                        colors: {
                            placeholder: 'grey', text: '#00316E', primary: 'white',
                            underlineColor: 'grey', background: '#003489'
                        }
                    }}

                />
                <TextInput
                    style={{ marginTop: 15, backgroundColor: "#fff", width: '40%', marginLeft: 50 }}
                    label='Expiry Date'
                    mode='flat'
                    activeUnderlineColor="grey"
                    theme={{
                        colors: {
                            placeholder: 'grey', text: '#00316E', primary: 'white',
                            underlineColor: 'grey', background: '#003489'
                        }
                    }}

                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 50 }}>
                <Text style={{ fontSize: 18, color: '#00316E', marginLeft: 20, }}>Save credit card information</Text>
                <Switch
                    trackColor={{ false: "#fff", true: "#00316E" }}
                    thumbColor={isEnabled ? "#fff" : "#00316E"}
                    ios_backgroundColor="#00316E"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ marginRight: 10 }}
                />
            </View>
            <View style={{ backgroundColor: "#32CD32", padding: 15, marginHorizontal: 60, bottom: 0, marginTop: 50, borderRadius: 10 }}>
                <Text style={{ textAlign: "center", color: '#fff', fontWeight: 'bold' }}>Pay Now</Text>
            </View>
        </ScrollView>
    )
}

export default Payments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
