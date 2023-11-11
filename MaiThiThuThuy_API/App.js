import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import API_Screen1 from "./Screens/API_Screen1";
import API_Screen2 from "./Screens/API_Screen2";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="API_Screen1" component={API_Screen1}></Stack.Screen>
        <Stack.Screen name="API_Screen2" component={API_Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
