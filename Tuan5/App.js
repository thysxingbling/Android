import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen01 from "./screens/Screen01";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          initialParams={{ color: "vs_blue" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
