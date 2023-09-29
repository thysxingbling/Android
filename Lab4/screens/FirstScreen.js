import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}>
        <View style={styles.img}></View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.h1}>GROW</Text>
        <Text style={styles.h1}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>
          Will we help you go your business using online server
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="LOGIN" color="yellow"></Button>{" "}
          <Button title="Sign Up" color="yellow"></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#00ccf9",
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 4,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 10,
    borderColor: "black",
  },
  view3: {
    flex: 1,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  
  },
  view4: {
    flex: 5,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
