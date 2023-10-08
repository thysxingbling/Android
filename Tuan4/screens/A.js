import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
const A = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.bgr}
                locations={[0, 1]}
                colors={["#fbcb00", "#bf9a00"]}
            />
            <View style={styles.section}>
                <Text style={styles.title}> Login </Text>

                <View style={styles.wrap_input}>
                    <Image
                        style={styles.icon}
                        source={require("../assets/avatar_user.png")}
                    />
                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </View>

                <View style={styles.wrap_input}>
                    <Image
                        style={styles.icon}
                        source={require("../assets/lock.png")}
                    />
                    <TouchableOpacity
                        style={styles.wrap_icon_right}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            style={styles.icon_right}
                            source={require("../assets/eye.png")}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        value={password}
                        secureTextEntry={!showPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        passwordRules=".*"
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}> login </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link}>
                    <Text style={styles.link_text}>Forgot your password ?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    bgr: {
        position: "fixed",
        width: "100%",
        height: "100%",
    },
    section: {
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 28,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 40,
        borderRadius: 8,
        fontSize: 18,
    },
    icon: {},
    wrap_input: {
        backgroundColor: "transparent",
        justifyContent: "center",
        height: 40,
        marginTop: 20,
    },
    icon: {
        width: 20,
        height: 20,
        position: "absolute",
        left: 22,
        top: 10,
    },

    wrap_icon_right: {
        position: "absolute",
        right: 22,
        top: 10,
    },

    icon_right: {
        width: 20,
        height: 20,
    },

    button: {
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        height: 50,
        margin: 12,
        paddingVertical: 20,
        marginTop: 100,
    },
    button_text: {
        color: "#fff",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "normal",
    },
    link: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    link_text: {
        fontSize: 20,
        fontWeight: "700",
    },
});

export default A;
