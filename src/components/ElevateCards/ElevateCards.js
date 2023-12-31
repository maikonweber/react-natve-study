import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevateCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevateCards</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevate]}>
                <Text> TAP </Text>
            </View>
            <View style={[styles.card, styles.cardElevate]}>
                <Text> to </Text>
            </View>
            <View style={[styles.card, styles.cardElevate]}>
                <Text> me </Text>
            </View>
            <View style={[styles.card, styles.cardElevate]}>
                <Text> scroll </Text>
            </View>
            <View style={[styles.card, styles.cardElevate]}>
                <Text> more </Text>
            </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row"
  },
  card : {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: 110,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 4,
    margin: 8,
  },
  cardElevate: {
    backgroundColor: 'red',
    elevation: 4,
    shadowOffset: {
        width: 5,
        height: 1
    },
    shadowColor: 'pink',
    shadowOpacity: 0.4,
    shadowRadius: 2
}
});
