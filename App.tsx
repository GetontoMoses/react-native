import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here ...."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Submit" onPress={() => Alert.alert(`Hello, ${name}!`)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#33",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "fff",
  },
});
