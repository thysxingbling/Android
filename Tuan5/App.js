// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen_1 from './screens/Screen_1'
import Screen_2 from './screens/Screen_2'

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sceen_1'>
        <Stack.Screen name="Screen_1" component={Screen_1} initialParams={{color: 'vs_blue'}}/>
        <Stack.Screen name="Screen_2" component={Screen_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}