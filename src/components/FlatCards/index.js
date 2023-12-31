import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FlatCards() {
  return (
    <View>
      <Text style={Style.Text}> Te amo Rayra</Text>
      <View style={Style.container} >
        <View style={[Style.card, Style.cardOne]}>
          <Text> Red </Text>
        </View >
        <View style={[Style.card, Style.cardTwo]}>
          <Text> Red </Text>
        </View>
        <View style={[Style.card,  Style.cardThree]}>
          <Text> Red </Text>
        </View>
        <View style={[Style.card,  Style.cardThree]}>
          <Text> Red </Text>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row"
},
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: 110,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: "red",
  },
  cardTwo: {
    backgroundColor: "blue",
  },
  cardThree: {
    backgroundColor: "violet",
  },
});
