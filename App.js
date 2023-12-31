import { StyleSheet, View, Text,ScrollView, SafeAreaView } from "react-native";
import FlatCards from "./src/components/FlatCards";
import { useState, useEffect } from "react";
import React from "react";
import ElevateCards from "./src/components/ElevateCards/ElevateCards";
import FancyCard from "./src/components/FancyCard";

export default function App() {

  return (
    <SafeAreaView >
      <ScrollView>
      <FlatCards/>
      <ElevateCards/>
      </ScrollView>
      <FancyCard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
