import React from "react";
import { View,  Text, StyleSheet } from "react-native";

export default function Result (props) {
    return (
        <View style={Style.container}>
            <Text>{ props.Text }</Text>
            <Text>{ props.ResultIMC }</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})
