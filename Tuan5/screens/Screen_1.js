import React from "react";
import { StyleSheet, Text, View,  Image, Pressable, SafeAreaView } from "react-native";
const Screen_1 = ({navigation, route}) => {

    const phones = {
        vs_blue : require('../assets/vs_blue.png'),
        vs_red : require('../assets/vs_red.png'),
        vs_silver : require('../assets/vs_silver.png'),
        vs_black : require('../assets/vs_black.png'),
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.product_img}
                source={ phones[route.params.color] }
            />

            <View style={styles.section} >
                <Text style={styles.product_name}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
                <View style={styles.rate}>
                    <View style={styles.star}>
                        {[...Array(5)].map(() => (
                            <Image
                                style={styles.star_img}
                                source={require("../assets/star.png")}
                            />
                        ))}
                    </View>
                    <Text style={styles.rate_text}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.price_wrap}> 
                    <Text style={styles.price}>1.690.000 đ</Text>
                    <Text style={styles.price_old}>1.990.000 đ</Text>            
                </View>
                <View style={styles.slogan}> 
                    <Text style={styles.slogon_text}> Ở đâu rẻ hơn hoàn tiền </Text>
                    <Image style={styles.quest_icon} source={require('../assets/question.png')}/>
                </View>
                <Pressable 
                    style={styles.btn_color}
                    onPress={() => navigation.navigate('Screen_2')}
                >
                    <Text style={styles.btn_color_text}>4 màu-chọn màu</Text>
                    <Image 
                        style={styles.arrow_left}
                        source={require('../assets/Vector.svg')}
                    />
                </Pressable>
                <Pressable 
                    style={styles.btn_buy}
                    titleStyle = {styles.btn_buy_text}
                    onPress= {() => alert('Chọn mua')}
                >
                    <Text style={styles.btn_buy_text}>Chọn mua</Text>  
                </Pressable>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        width:'100%', 
        height:'100%',
    },

    product_img :{
        width: 301,
        height: 361,
        marginBottom: 20,
    },

    section: {
        flex: 1, 
        flexDirection: "column",
        marginHorizontal: 10,
    },

    product_name :{
        fontSize: 18,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: 10,
    },

    rate :{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 10,
        width: '100%'
    },

    star :{
        flexDirection: "row",
        marginRight: 5,
        justifyContent: 'space-between',
    },
    
    star_img :{
        width: 24, 
        height: 24,
        marginRight: 2,
    },

    rate_text :{
        fontSize: 16,
        color: "#999",
        marginLeft: 10,
    },

    price_wrap :{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    price :{
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 10,
    },

    price_old :{
        fontSize: 16,
        color: "#999",
        textDecorationLine: "line-through",
        marginLeft: 10,
    },

    slogan :{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    slogon_text :{
        fontSize: 14,
        color: "red",
        marginRight: 5,
        fontWeight: "bold",
    },

    quest_icon :{
        width: 22,
        height: 22,
    },

    btn_color :{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 2, 
        borderColor: "#999",
        marginBottom: 10,
    },

    btn_color_text :{
        fontSize: 18,
        color: "#333",
        marginRight: 5,
        fontWeight: '600', 
        textTransform: 'uppercase',
    },

    arrow_left :{
        position: 'absolute',
        width: 11.5,
        height: 14,
        zIndex: 1,
        right: 20, 
    },

    btn_buy :{
        backgroundColor: "#f00",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    btn_buy_text :{
        fontSize: 16,
        color: "#fff",
        fontWeight: '600',
        fontSize: 20,
        textTransform: 'uppercase',
        alignSelf: 'center'
    },
});

export default Screen_1;