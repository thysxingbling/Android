import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
const Stack =createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}>
          <Stack.Screen name="Detail" component={Detail}></Stack.Screen>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

