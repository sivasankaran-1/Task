import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="map-marker-outline" color={"#00316E"} size={25} />
            <View style={{ marginLeft: 5 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 15, color: '#00316E', fontWeight: 'bold' }}>Current Location</Text>
                    <MaterialCommunityIcons name="chevron-down" color={"#00316E"} size={18} />
                </View>
                <Text style={{ fontSize: 12, color: 'grey', }}>Dhakka,Uttara</Text>
            </View>
            <MaterialCommunityIcons name="bell-minus-outline" color={"#00316E"} size={25} style={{ marginLeft: 180 }} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 10
    }
})
