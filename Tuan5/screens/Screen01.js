import { SafeAreaView, Pressable, Image, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
const Screen01 = ({ navigation, route }) => {
  const phones = {
    vs_blue: require("../assets/vs_blue.png"),
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={phones[route.params.color]}></Image>
      <View style={styles.section}>
        <Text style={styles.name}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View style={styles.rate}>
        <View style={styles.star}>
          {[...Array(5)].map(() => (
            <Image
              source={require("../assets/start.png")}
              style={styles.star_img}
            />
          ))}
        </View>
        <Text style={styles.rate_text}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.price_wrap}>
        <Text style={styles.price}>1.690.000 đ</Text>
        <Text style={styles.price_old}>1.990.000 đ</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.txt}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          style={styles.img_ques}
          source={require("../assets/question.png")}
        ></Image>
      </View>
      <Pressable
        style={styles.btn_color}
        onPress={() => navigation.navigate("Screen02")}
      >
        <Text style={styles.btn_color_text}>4 màu-chọn màu</Text>
        <Image
          style={styles.img_left}
          source={(require = "../assets/question.png")}
        ></Image>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  img: {
    width: "301px",
    height: "361px",
  },
  section: {
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 400,
    marginBottom: 10,
  },
  rate: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  star: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 5,
  },
  star_img: {
    width: "23px",
    height: "25px",
    marginRight: 2,
    alignItems: "center",
  },
  rate_text: {
    marginLeft: 10,
    fontSize: 15,
  },
  price_wrap: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    marginRight: 40,
    fontSize: 18,
    fontWeight: 700,
  },
  price_old: {
    fontSize: 15,
    textDecorationLine: "line-through",
    marginLeft: 15,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  txt: {
    color: "red",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
  img_ques: {
    width: "20px",
    height: "20px",
    marginLeft: 10,
  },
  btn_color: {
    flexDirection: "row",
    width: "332px",
    height: "34px",
    borderRadius: "10px",
    borderWidth: "1px",
    alignItems: "center",
  },
  btn_color_text: {
    textTransform: "uppercase",
    marginRight: 5,
  },
  img_left: {
    position: "absolute",
    width: 11.5,
    height: 14,
    zIndex: 1,
    right: 20,
  },
});
export default Screen01;
