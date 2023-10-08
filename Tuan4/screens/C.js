import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useState } from "react";
const C = () => {
    const [passwordLenght, setPasswordLenght] = useState('');
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);
    const [password, setPassword] = useState('');

    const handleGeneratePassword = () => {
        setPassword(genaratePassword(passwordLenght, includeLowerCase, includeUpperCase, includeNumber, includeSpecialSymbol));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> password generator </Text>
            <TextInput 
                style={styles.input} 
                editable={false} 
                value={password}
            />
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Password length </Text>
                <TextInput 
                    style={styles.pass_lenght}
                    value={passwordLenght}
                    onChangeText={(text) => setPasswordLenght(text)}
                ></TextInput>
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include lower case letters </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={includeLowerCase}
                    onPress={() => {
                        setIncludeLowerCase(!includeLowerCase);
                    }}
                />
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include upcase letters </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={includeUpperCase}
                    onPress={() => {
                        setIncludeUpperCase(!includeUpperCase);
                    }}
                />
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include number </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={includeNumber}
                    onPress={() => {
                        setIncludeNumber(!includeNumber);
                    }}
                />
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include special symbol </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={includeSpecialSymbol}
                    onPress={() => {
                        setIncludeSpecialSymbol(!includeSpecialSymbol);
                    }}
                />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text
                    style={styles.btn_text}
                    checked={includeLowerCase}
                    onPress={handleGeneratePassword}
                >
                    Generate password
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// function to generate password
const genaratePassword = (passwordLenght, includeLowerCase, includeUpperCase, includeNumber, includeSpecialSymbol) => {

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const specialSymbol = "!@#$%^&*()_+";

    let characters = "";
    let password = "";

    if (includeLowerCase) {
        characters += lowerCase;
    }
    if (includeUpperCase) {
        characters += upperCase;
    }
    if (includeNumber) {
        characters += number;
    }
    if (includeSpecialSymbol) {
        characters += specialSymbol;
    }

    for (let i = 0; i < passwordLenght; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#23235b",
        display: "fixed",
        width: "100%",
        height: "100%",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
    input: {
        backgroundColor: "#fff",
        width: "80%",
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    wrap_part: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 10,
    },
    label: {
        color: "#fff",
        fontSize: 16,
    },

    pass_lenght: {
        color: "#000",
        fontSize: 16,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        width: 100,
    },

    btn: {
        backgroundColor: "#3b3b98",
        width: "80%",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    btn_text: {
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: 600,
    },
});
export default C;
