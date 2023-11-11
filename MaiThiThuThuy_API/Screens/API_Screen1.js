import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const API_Screen1 = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#DEE1E6" }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: "24px", fontWeight: 700 }}>
          Welcome to Cafe world
        </Text>

        <Image
          source={require("../assets/Image.png")}
          style={{ width: "200px", height: "62px" }}
        ></Image>
        <Image
          source={require("../assets/Image (1).png")}
          style={{ width: "200px", height: "73px" }}
        ></Image>
        <Image
          source={require("../assets/Image (2).png")}
          style={{ width: "200px", height: "76px" }}
        ></Image>
      </View>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            width: "312px",
            height: "50px",
            backgroundColor: "#00BDD6",
            borderRadius: "6px",
            borderWidth: " #ffff 1px",
          }}
          onPress={() => navigation.navigate("API_Screen2")}
        >
          <Text
            style={{
              textTransform: "uppercase",
              padding: 1,
              color: "#ffff",
              fontSize: 14,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default API_Screen1;
