import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-bootstrap";
import { getUserDetails } from "../api/api";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.home}>HomeScreen</Text>
      <TouchableOpacity
        style={styles.roundButton}
        onPress={() => navigation.navigate("User")}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
    position: "absolute",
    top: 620,
    display: "flex",
    alignItems: "center",
    left: 282,
  },
  text: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 10,
  },
});
