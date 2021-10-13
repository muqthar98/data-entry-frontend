import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { addUser } from "../api/api";

export default function User() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [itemName, setItemName] = useState("");
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [isPaid, setIsPaid] = useState("");

  const submitHandler = () => {
    addUser();
    <Alert variant="success">User is Created!!</Alert>;
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={(itemName) => setItemName(itemName)}
        placeholder="Item Name"
      />
      <TextInput
        style={styles.input}
        value={advanceAmount}
        onChangeText={(advanceAmount) => setAdvanceAmount(advanceAmount)}
        placeholder="Advance Amount"
      />
      <TextInput
        style={styles.paidButton}
        value={isPaid}
        onChangeText={(isPaid) => setIsPaid(isPaid)}
        placeholder="Paid or Not Paid"
      />
      <Button title="create" onPress={submitHandler()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
    padding: 10,
  },
  paidButton: {
    marginTop: 20,
    padding: 10,
    marginBottom: 20,
  },
});
