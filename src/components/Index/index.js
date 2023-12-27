import React from "react";
import { View,  Text, StyleSheet } from "react-native";

export default function Title ( ) {
    return (
        <View style={Style.container}>
            <Text> Te amo Rayra
                 </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})

