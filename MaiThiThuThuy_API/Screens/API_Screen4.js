import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
const API_Screen4 = ({ navigation }) => {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://64b23c1838e74e386d54d3a5.mockapi.io/user")
      .then((response) => response.json())
      .then((json) => {
        console.log(data);
        setData(json);
      });
  }, []);
  return (
    <View style={{flex:1}}>
      <View
        style={{
          paddingHorizontal: 20,
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("API_Screen1");
          }}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
        </Pressable>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your orders</Text>
        </View>
        <View>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: 347,
            height: 100,
            backgroundColor: "#00BDD6",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              CAFE DELIVERY
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontWeight: "bold",
                marginTop: 6,
              }}
            >
              Order #18
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              $5
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 347,
            height: 100,
            backgroundColor: "#8353E2",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              CAFE DELIVERY
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontWeight: "bold",
                marginTop: 6,
              }}
            >
              Order #18
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              $5
            </Text>
          </View>
        </View>
      </View>
      {data.map((item, index) => {
        return (
          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: "#ccc",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <View style={{ flex: 1 }}>
              <Image source={item.image} style={{ width: 50, height: 50 }} />
            </View>

            <View style={{ flex: 3 }}>
              <View>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 6,
                }}
              >
                <Feather name="play" size={18} color="black" />
                <Text>{item.price}</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Ionicons name="remove-circle" size={30} color="#0fa958" />
              <Ionicons name="add-circle" size={30} color="#0fa958" />
            </View>
          </View>
        );
      })}
      <Pressable
        style={{
          backgroundColor: "#EFB034",
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate("API_Screen1");
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
          PAY NOW
        </Text>
      </Pressable>
    </View>
  );
};
export default API_Screen4;
