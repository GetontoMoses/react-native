import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";

const Stack = createStackNavigator();

export default function HomeScreen () {
    return (
      <View style={styles.container}>
        {" "}
        <Text style={styles.title}> Home page</Text>
        <Button
          title="Profile page"
          
        />
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});