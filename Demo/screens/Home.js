import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { FlatList, Image, Pressable, View } from "react-native";
const data = [
  {
    image: require("../assets/a.png"),
    name: "Pinarello",
    price: 180,
    des: "show something",
    type: "roadbike",
  },
  {
    image: require("../assets/b.png"),
    name: "Pinarello",
    price: 180,
    des: "show something",
    type: "roadbike",
  },
  {
    image: require("../assets/a.png"),
    name: "Pinarello",
    price: 180,
    des: "show something",
    type: "mountain",
  },
  {
    image: require("../assets/c.png"),
    name: "Pinarello",
    price: 180,
    des: "show something",
    type: "mountain",
  },
  {
    image: require("../assets/b.png"),
    name: "Pinarello",
    price: 180,
    des: "show something",
    type: "mountain",
  },
  {
    image: require("../assets/b.png"),
    name: "Pinarello",
    price: 180,
    des: "show something",
    type: "roadbike",
  },
];
function Home() {
  const navigation = useNavigation();
  const [state, setSate] = React.useState(data);
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <View style={{flex:1}}>
        <Pressable>
          
        </Pressable>


      </View>
        <View style={{ flex: 8, backgroundColor: "pink" }}>
      <FlatList
        numColumns={2}
        data={state}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Detail", item);
              }}
              style={{
                alignItems: "center",

                height: "150px",
                width: "45%",
                borderRadius: "10px",
                backgroundColor: "pink",
                shadowOffset: { width: "3px", height: "3px" },
                shadowColor: "grey",
                shadowOpacity: "0.5",
                margin: "5px",
              }}
            >
              <Image source={item.image}></Image>
              <Text>{item.name}</Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
    </View>
  );
}
export default Home();
