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

const Tiki = () => {
    const [quantity, setQuantity] = useState(0); 
    console.log('re-render'); 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_top}>
                    <Image
                        style={styles.product}
                        source={require("../assets/book.png")}
                    />
                    <View style={styles.header_right}>
                        <Text style={styles.title}>Nguyên hàm tích phân và thuyết tương đối</Text>
                        <Text style={styles.price}>141.800 đ</Text>
                        <Text style={styles.old_price}>200.000 đ</Text>
                        <View style={styles.header_right_bottom}>
                            <View style={styles.changeQuantity}>
                                <TouchableOpacity style={[styles.button, {marginLeft: -3}]}
                                    onPress={() =>setQuantity(quantity-1)}
                                    disabled={quantity <= 0}
                                > 
                                    <Image
                                        style={styles.buttonIcon}
                                        source={require("../assets/btnminus.png")}
                                    ></Image>
                                </TouchableOpacity>
                                <Text style={styles.quantity}> {quantity} </Text>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => setQuantity(quantity+1)}
                                >
                                    <Image
                                        style={styles.buttonIcon}
                                        source={require("../assets/btnadd.png")}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.blueText}> Mua sau </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header_bottom}>
                    <View style={styles.header_bottom_first}>
                        <Text style={styles.header_bottom_text1}>
                            Mã giảm giá đã lưu
                        </Text>
                        <Text
                            style={[
                                styles.header_bottom_text2,
                                styles.blueText,
                            ]}
                        >
                            Xem tại đây
                        </Text>
                    </View>
                    <View style={styles.header_bottom_second}>
                        <View style={styles.wrap1}>
                            <View
                                style={{
                                    width: 32,
                                    height: 16,
                                    backgroundColor: "#f2dd1b",
                                    marginRight: 5,
                                }}
                            />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                            }}> Mã giảm giá </Text>
                        </View>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.textBtn}> Áp dụng </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View>

                    <View style={styles.body_first}>
                        <Text style={{
                            fontWeight: 'bold'
                        }}> 
                            Bạn có phiếu quà tặng Tiki/Got it/ Urbox ? 
                            <Text style={styles.blueText}> Nhập tại đây ?</Text>
                        </Text>
                    </View>
                    
                    <View>
                        <View style={[styles.body_first, {justifyContent: 'space-between'}]}>
                            <Text style={{
                                fontSize: 20, 
                                fontWeight: 'bold'}}
                            > Tạm tính </Text>
                            <Text style={{
                                fontSize: 20, 
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                            > {141800*quantity} đ </Text>
                        </View>

                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={[styles.body_first, {justifyContent: 'space-between'}]}>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold',
                            opacity: 0.7
                        }}
                        > Thành tiền </Text>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                        > {141800*quantity} đ </Text>
                    </View>
                    
                    <TouchableOpacity style={styles.button2}>
                        <Text style={[styles.textBtn, {fontSize: 20}]}> TIẾN HÀNH ĐẶT HÀNG </Text>
                    </TouchableOpacity>
                </View>           
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#808080",
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        backgroundColor: "#fff",
        width: "100%",
        flex: 3,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        overflow: "hidden",
    },
    header_top: { 
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    product: {
        width: 104,
        height: 127,
        marginRight: 20,
    },
    header_right: {
        flex: 1,
        height: 100,
        padding: 10,
        paddingTop: 0,
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    price: {
        fontWeight: "bold",
        fontSize: 20,
        color: "red",
    },
    old_price: {
        textDecorationLine: "line-through",
        color: "gray",
        fontWeight: 'bold'
    },
    header_right_bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    changeQuantity: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonIcon: {
        width: 20,
        height: 20,
    },
    quantity: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 6,
    },
    blueText: {
        color: "#00f",
        fontWeight: 'bold', 
    },
    header_bottom: {
        width: "100%",
        height: 100,
        paddingVertical: 20,
        justifyContent: "space-between",
    },
    header_bottom_first: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 40,
    },
    header_bottom_text1: {
        fontSize: 16,
        paddingRight: 30,
        fontWeight: "bold",
    },
    header_bottom_text2: {
        fontSize: 16,
        fontWeight: "bold",
    },
    header_bottom_second: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    wrap1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#000", 
        borderWidth: 1,
        padding: 12,
        
    },
    button1: {
        backgroundColor: "#00f",
        borderRadius: 4,
        height: 50,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20, 
        fontWeight: "bold",
    },
    textBtn: {
        color: "#fff",
        fontSize: 16,
        fontWeight:'bold', 
    },
    
    body: {
        flex: 4, 
        justifyContent: 'space-between',
    },  

    body_first: { 
        width: '100vw', 
        height: 50, 
        backgroundColor: '#fff', 
        marginTop: 18, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems :'center', 
        padding: 20,
    },  
    footer: {
        backgroundColor: 'blue', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#fff'
    },
    button2: {
        backgroundColor: 'red', 
        width: '90vw', 
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 12,
        borderRadius: 4, 
    },
});
export default Tiki;
