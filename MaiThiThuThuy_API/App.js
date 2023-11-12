import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import API_Screen1 from "./Screens/API_Screen1";
import API_Screen2 from "./Screens/API_Screen2";
import API_Screen3 from "./Screens/API_Screen3";
import API_Screen4 from "./Screens/API_Screen4";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="API_Screen1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="API_Screen1" component={API_Screen1} ></Stack.Screen>
        <Stack.Screen name="API_Screen2" component={API_Screen2}></Stack.Screen>
        <Stack.Screen name="API_Screen3" component={API_Screen3}></Stack.Screen>
        <Stack.Screen name="API_Screen4" component={API_Screen4}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
