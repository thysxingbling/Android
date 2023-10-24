import { Image } from "react-native";
function Detail({ route }) {
  const item = route.params();
  return (
    <View>
      <Image
        source={item.img}
        style={{ height: "100px", width: "100px" }}
      ></Image>
    </View>
  );
}
export default Detail();
