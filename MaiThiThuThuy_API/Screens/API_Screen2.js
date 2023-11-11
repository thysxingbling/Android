import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FlatList, View } from "react-native";

const API_Screen2 = ({ navigation }) => {
  const navigation = useNavigation();
  const url = "https://654ad47d5b38a59f28ee4431.mockapi.io/shop";
  fetch("url")
    .then((response) => {
      console.log(response);
    })
    .then((data) => {
      // console.log(json);
    })
    .catch((error) => {});

  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <View style={{ justifyContent: "center" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
};

export default API_Screen2;
