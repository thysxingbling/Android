import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const B = () => {
    const [input, setInput] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.header_img}
                    source={require("../assets/usb.png")}
                />
                <Text style={styles.header_text}>
                    USB Bluetooth Music Receiver HJX-001- Biến loa thường thành
                    loa bluetooth
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.section_text}> Cực kỳ hài lòng </Text>
                <View style={styles.rate}>
                    <Image
                        style={styles.rete_star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.rete_star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.rete_star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.rete_star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.rete_star}
                        source={require("../assets/star.png")}
                    />
                </View>
                <TouchableOpacity style={styles.addImage}>
                    <Image
                        style={styles.addImage_img}
                        source={require("../assets/camera.png")}
                    />
                    <Text style={styles.addImage_text}> Thêm hình ảnh </Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.text_input}
                    placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm"
                    multiline={true}
                    placeholderTextColor="gray"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => input && alert(`Đã gửi đánh giá: ${input}`)}
                >
                    <Text style={styles.buttonText}> gửi </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    header_img: {
        width: 70,
        height: 70,
        marginRight: 10,
    },

    header_text: {
        fontWeight: "700",
        fontSize: 16,
    },

    section: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 150,
    },

    section_text: {
        fontWeight: "700",
        fontSize: 18,
    },

    rate: {
        flex: 1,
        flexDirection: "row",
        padding: 20,
    },

    rete_star: {
        width: 40,
        height: 40,
        margin: 8,
    },

    addImage: {
        flexDirection: "row",
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: "#1511eb",
        borderWidth: 1,
        paddingVertical: 16,
        width: 300,
        justifyContent: "center",
    },

    addImage_text: {
        textAlign: "center",
        lineHeight: 32,
        fontSize: 18,
        fontWeight: "700",
    },

    addImage_img: {
        width: 39,
        height: 32,
    },

    text_input: {
        width: 300,
        height: 200,
        borderRadius: 5,
        marginVertical: 12,
        borderStyle: "solid",
        justifyContent: "flex-start",
        borderColor: "#1511eb",
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
    },

    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        width: 280,
    },
});

export default B;
