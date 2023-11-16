import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native-web";

const Screen3 = ({ navigation, route }) => {
    const jobInput = useRef(null);
    const [job, setJob] = useState(route.params?.info.todoList.find((todo) => todo.id === route.params?.id)?.name || "");
    const info = route.params?.info;

    useEffect(() => {
        jobInput.current.focus();
    }, [job]);

    const handleAdd = () => {
        if( !route.params?.id ) {
            route.params.onUpdateInfo({
                ...info,
                todoList: [
                    ...info.todoList,
                    { id: Math.random(), name: job, state: false, editable: false },
                ],
            });
        } else {
            route.params.onUpdateInfo({
                ...info,
                todoList: info.todoList.map((todo) =>
                    todo.id === route.params?.id ? { ...todo, name: job } : todo
                ),
            });
        }
        navigation.goBack(); 
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={styles.avt}
                        source={require("../assets/avt.png")}
                    />
                    <Text style={styles.text1}>{route.params?.email}</Text>
                </View>
                <Pressable
                    onPress={() =>
                        navigation.navigate({
                            name: "Screen2",
                        })
                    }
                    style={styles.btnback}
                >
                    <Image
                        style={styles.icon2}
                        source={require("../assets/back.svg")}
                    />
                </Pressable>
            </View>
            <Text style={styles.title}>ADD YOUR JOB</Text>
            <View style={styles.inputwrap}>
                <Image
                    style={styles.icon1}
                    source={require("../assets/icon1.svg")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="input your job"
                    value={job}
                    onChangeText={setJob}
                    ref={jobInput}
                />
            </View>
            <Pressable style={styles.btn} onPress={handleAdd}>
                <Text style={styles.btntext}>FINISH</Text>
            </Pressable>
            <Image style={styles.img} source={require("../assets/bgr.png")} />
        </View>
    );
};

export default Screen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 40,
        alignItems: "center",
    },
    avt: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50,
    },
    icon2: {
        width: 20,
        height: 20,
    },
    text1: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        paddingTop: 40,
    },
    inputwrap: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        width: "100%",
    },
    icon1: {
        width: 20,
        height: 20,
        marginRight: 10,
        position: "absolute",
        left: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 40,
    },
    btn: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btntext: {
        color: "#fff",
        fontSize: 18,
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginTop: 50,
    },
});
