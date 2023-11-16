import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
const Screen1 = ({ navigation }) => {
    const [email, setEmail] = useState("Hello world");
    return (
        <View style={styles.ctn}>
            <Image
                style={styles.bgr}
                source={require("../assets/bgr.png")}
            ></Image>
            <Text style={styles.text1}>MANAGE YOUR TASK</Text>
            <View style={styles.inputwrap}>
                <Image
                    style={styles.icon}
                    source={require("../assets/iconemail.svg")}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder="Enter your name"
                />
            </View>
            <Pressable
                style={styles.btn}
                onPress={() =>
                    navigation.navigate({ name: "Screen2", params: { email }})
                }
            >
                <Text style={styles.btntext}>GET STARTED</Text>
            </Pressable>
        </View>
    );
};

export default Screen1;

const styles = StyleSheet.create({
    ctn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 40,
    },
    bgr: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    text1: {
        color: "#8353E2",
        fontSize: 24,
        fontWeight: 600,
        paddingBottom: 20,
    },
    inputwrap: {
        paddingBottom: 20,
        width: "100%",
    },
    icon: {
        width: 20,
        height: 20,
        position: "absolute",
        left: 8,
        top: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingLeft: 30,
    },

    btn: {
        backgroundColor: "#8353E2",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        marginTop: 20,
    },
    btntext: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
    },
});
