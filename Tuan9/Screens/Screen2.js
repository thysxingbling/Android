import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";

const Screen2 = ({ navigation, route }) => {
    const email = route.params?.email;
    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch("https://65406abd45bedb25bfc1e202.mockapi.io/ArrayTodoList")
            .then((response) => response.json())
            .then((json) => {
                let infodata = json.find((item) => item.email === email);
                if (infodata)
                    setInfo(json.find((item) => item.email === email) || {});
                else {
                    fetch(
                        "https://65406abd45bedb25bfc1e202.mockapi.io/ArrayTodoList",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email,
                                todoList: [],
                            }),
                        }
                    )
                        .then((response) => response.json())
                        .then((json) => setInfo(json));
                }
            });
    }, []);

    // 
    useEffect(() => {
        if (info?.todoList) {
            fetch(
                `https://65406abd45bedb25bfc1e202.mockapi.io/ArrayTodoList/${info.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(info),
                }
            );
        }
    }, [info]);

    const handleCheck = (id) => {
        setInfo({
            ...info,
            todoList: info.todoList.map((todo) =>
                todo.id === id ? { ...todo, state: !todo.state } : todo
            ),
        });
    };
    const handleDelete = (id) => {
        setInfo({
            ...info,
            todoList: info.todoList.filter((todo) => todo.id !== id),
        });
    };

    const onUpdateInfo = (newInfo) => {
        setInfo(newInfo);
    };

    const handleEdit = (id) => {
        navigation.navigate({
            name: "Screen3",
            params: { info, onUpdateInfo, id },
        });
    };
    return (
        <View style={styles.ctn}>
            <View style={styles.inputwrap}>
                <Image
                    style={styles.icon}
                    source={require("../assets/search.svg")}
                />
                <TextInput style={styles.input} placeholder="Search" />
            </View>
            <View style={styles.todos}>
                {info.todoList?.map((todo) => (
                    <View style={styles.todo} key={todo.id}>
                        <Pressable
                            style={styles.btncheck}
                            onPress={() => handleCheck(todo.id)}
                        >
                            <Image
                                style={styles.check}
                                source={require(`../assets/check${
                                    todo.state ? "" : "2"
                                }.svg`)}
                            />
                        </Pressable>

                        <TextInput
                            style={styles.todoname}
                            value={todo.name}
                            readOnly
                        />
                        <Pressable
                            style={styles.btncheck}
                            onPress={() => handleEdit(todo.id)}
                        >
                            <Image
                                style={styles.check}
                                source={require("../assets/edit.svg")}
                            />
                        </Pressable>

                        <Pressable
                            style={styles.btncheck}
                            onPress={(e) => handleDelete(todo.id)}
                        >
                            <Image
                                style={styles.check}
                                source={require("../assets/delete.svg")}
                            />
                        </Pressable>
                    </View>
                ))}
            </View>
            <Pressable
                onPress={() =>
                    navigation.navigate({
                        name: "Screen3",
                        params: { info, onUpdateInfo },
                    })
                }
                style={styles.btn}
            >
                <Image
                    style={styles.btnicon}
                    source={require("../assets/add.png")}
                />
            </Pressable>
        </View>
    );
};

export default Screen2;

const styles = StyleSheet.create({
    ctn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    avt: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50,
    },
    inputwrap: {
        width: "100%",
        paddingVertical: 40,
        position: "relative",
    },
    icon: {
        width: 20,
        height: 20,
        position: "absolute",
        left: 8,
        top: 50,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingLeft: 30,
    },
    todos: {
        width: "100%",
    },
    todo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 10,
        backgroundColor: "pink",
        marginVertical: 4,
        borderRadius: 20,
        height: 40,
    },
    todoname: {
        fontSize: 16,
        fontWeight: 500,
        outlineStyle: "none",
    },
    btncheck: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    check: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        marginTop: 20,
    },
    btnicon: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    editing: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 4,
        padding: 2,
    },
});
