
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Screen1"
                    component={Screen1}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Screen2"
                    component={Screen2}
                    options={({ route }) => ({
                        title: "",
                        headerRight: () => {
                            return (
                                <View style={{flexDirection:'row', alignItems: 'center', paddingRight:20}}>
                                    <Image style={styles.avt} source={require("./assets/avt.png")} />
                                    <Text style={styles.text1}>{route.params?.email}</Text>
                                </View>
                            );
                        },
                    })}
                />
                <Stack.Screen
                    name="Screen3"
                    component={Screen3}
                    options={{
                        headerShown: false,
                        initialParams: { email: "Khanh" },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    avt: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50,
    },
});
