import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native';

const API_Screen3 = ({navigation}) => {
  const [data,setData]=useState([]);
  const route= useRoute();
  useEffect(()=>{
    fetch("https://64b23c1838e74e386d54d3a5.mockapi.io/user")
    .then((response)=> response.json())
    .then((json) =>{
      console.log(data);
      setData(json)
    })
  },[]);
  return (
<View>
      <View
        style={{
          paddingHorizontal: 20,
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("API_Screen1"); // quay trở về trang trước đó
          }}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
        </Pressable>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Drinks</Text>
        </View>
        <View>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>
      {data.map((item, index) => {
        return (
          <Pressable>
            <View
              style={{
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

              <View style={{ flex: 3 , }}>
                <View>
                  <Text style={{fontSize:18}}>{item.name}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center' ,marginVertical:6}}>
                  <Feather name="play" size={19} color="black" />
                  <Text style={{fontSize:13}}>{item.price}</Text>
                </View>
              </View>

              <View style={{ flex: 1,flexDirection:'row',alignItems:'center' ,justifyContent:'space-between'}}>
                <Ionicons name="remove-circle" size={30} color="#0fa958" />
                <Ionicons name="add-circle" size={30} color="#0fa958" />
              </View>
            </View>
          </Pressable>
        );
      })}
       <Pressable
          style={{backgroundColor:'#EFB034',width:'100%',height:50,justifyContent:'center',alignItems:'center'}}
          onPress={() => {
            navigation.navigate("API_Screen4"); 
          }}
        >
          <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>GO TO CART</Text>
        </Pressable>
    </View>
  );
}

export default API_Screen3