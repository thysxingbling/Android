
import { StyleSheet, Text, View ,Image, Pressable} from 'react-native';
import React, { useState, useEffect } from "react";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const API_Screen2 = ({ navigation }) => {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://64b23c1838e74e386d54d3a5.mockapi.io/coffee")
      .then((response) => response.json())
      .then((json) => {
        console.log(data);
        setData(json);
      });
  }, []);
  return (
        <View style={{flex:1}}>
            <View style={{paddingHorizontal:20,marginVertical:10,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <Pressable 
                   onPress={()=>{
                    navigation.goBack('API_Screen1')  // quay trở về trang trước đó
       }}
                >
                    <AntDesign name="arrowleft" size={30} color="black" />
                </Pressable>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Shops Near Me</Text>
                </View>
                <View>
                    <AntDesign name="search1" size={24} color="black" />
                </View>
            </View>
    {data.map((item,index) => {
        return (
          <Pressable
          onPress={() => {
            navigation.navigate("API_Screen3"); 
          }}
          >
            <View style={{width:'100%',height:200,paddingHorizontal:10,marginVertical:10}}>
                <View>
                    <Image source={item.image} style={{width:'100%',height:114}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                    <View style={{flexDirection:'row'}}>
                        <AntDesign name="check" size={24} color="#0fa958" />
                        <Text style={{color:'#DE3B40',}}>{item.order}</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:6}}>
                        <Ionicons name="time-outline" size={24} color="#0fa958" />
                        <Text style={{color:'#DE3B40',}}>{item.time}</Text>
                        <Entypo name="location-pin" size={24} color="#0fa958" />
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{fontSize:16,color:'#333'}}>{item.address}</Text>

                </View>
                
          </View>
          </Pressable>
        );
      })}
        </View>
  );
}

export default API_Screen2
