import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";

const Screen1 = () => {
  const [data, setData] = useState([]);
  var url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <View style={{ paddingHorizontal: 10, width: "100%", flex: 1 }}>
      <Text style={{ fontWeight: "400", fontSize: "14px" }}>
        Welcome, Jala!
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Choice you Best food
      </Text>
      <TextInput
        style={{
          width: "60%",
          height: 40,
          borderWidth: 1,
          borderColor: "#C4C4C4",
          marginBottom: 10,
          color: "#e8e8e8",
        }}
        placeholder="Search food"
      ></TextInput>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            borderWidth: 1,
            borderColor: "#C4C4C4",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Text>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            borderWidth: 1,
            borderColor: "#C4C4C4",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Text>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            borderWidth: 1,
            borderColor: "#C4C4C4",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Text>Floating</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#f4dddd",
              padding: 5,
              marginBottom: 10,
            }}
            key={item.key}
            onPress={() => console.log(item.title)}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 90, resizeMode: "contain" }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
                backgroundColor: "#f4dddd",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {item.price}
              </Text>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  borderRadius: 10,
                  bottom: 0,
                  right: 0,
                  backgroundColor: "#f1b000",
                  height: 25,
                  width: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen1;
