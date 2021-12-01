import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Ionicons';
import TextFields from '../components/TextFields';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const icons = ["ios-location-outline", "ios-card-outline", "ios-checkmark-sharp"];

const labels = ["Address", "Payment", "Confirm"];
const customStyles = {
    stepIndicatorSize: 50,
    currentStepIndicatorSize: 50,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: 'grey',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: 'grey',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#000',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#F0FFFF',
    stepIndicatorCurrentColor: '#32CD32',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#00316E',
    stepIndicatorLabelFinishedColor: '#00316E',
    stepIndicatorLabelUnFinishedColor: '#00316E',
    labelColor: '#999999',
    labelSize: 15,
    currentStepLabelColor: '#00316E'
}

const Profile = () => {
    const [position, setposition] = useState(0)
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 15, alignItems: "center" }}>
                <MaterialCommunityIcons name="chevron-left" color={"#00316E"} size={25} />
                <Text style={{ fontSize: 18, color: '#00316E', fontWeight: "bold" }}> Address</Text>
            </View>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={position}
                labels={labels}
                stepCount={3}
                renderStepIndicator={({ position, stepstatus }) => (<Icon name={icons[position]} size={20} color="green" />)}
            />
            <TextFields />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff'
    }
})
