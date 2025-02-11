import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";


export default function Profilepage ({navigation}) { 
    return (
      <View style={styles.container}>
        {" "}
        <Text style={styles.title}>Welcome to Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.goBack()}
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