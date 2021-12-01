import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

const TextFields = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{ marginTop: 15, backgroundColor: "#fff", marginHorizontal: 20, }}
                label='Name'
                mode='flat'
                activeUnderlineColor="grey"
                theme={{
                    colors: {
                        placeholder: 'grey', text: '#00316E', primary: 'white',
                        underlineColor: 'transparent', background: '#003489'
                    }
                }}

            />
            <TextInput
                style={{ marginTop: 15, backgroundColor: "#fff", marginHorizontal: 20, }}
                label='Shipping Address'
                mode='flat'
                activeUnderlineColor="grey"
                theme={{
                    colors: {
                        placeholder: 'grey', text: '#00316E', primary: 'white',
                        underlineColor: 'transparent', background: '#003489'
                    }
                }}

            />
            <TextInput
                style={{ marginTop: 15, backgroundColor: "#fff", marginHorizontal: 20, }}
                label='Phone Number'
                mode='flat'
                activeUnderlineColor="grey"
                theme={{
                    colors: {
                        placeholder: 'grey', text: '#00316E', primary: 'white',
                        underlineColor: 'transparent', background: '#003489'
                    }
                }}

            />
            <View style={{ backgroundColor: "#32CD32", padding: 15, marginHorizontal: 60, bottom: 0, marginTop: 250, borderRadius: 10 }}>
                <Text style={{ textAlign: "center", color: '#fff', fontWeight: 'bold' }}>Save Address</Text>
            </View>
        </View>
    )
}

export default TextFields

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
