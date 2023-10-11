import {View, Text, StyleSheet, Image, Pressable} from 'react-native'; 
import react from 'react'; 
const Screen_2 = ({navigation}) => { 
    const phones = {
        vs_blue : require('../assets/vs_blue.png'),
        vs_red : require('../assets/vs_red.png'),
        vs_silver : require('../assets/vs_silver.png'),
        vs_black : require('../assets/vs_black.png'),
    }

    const [color, setColor] = react.useState('vs_blue');
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.product_img} source={phones[color]} />
                <Text style={styles.product_desc}>Điện thoại Vsmart Joy 3 Hàng chính hãng </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_title}> Chọn một màu bên dưới: </Text>
                <View style={styles.group_btn}>
                    <Pressable style={[styles.btn1, styles.btn]} onPress={()=>setColor('vs_silver')} />
                    <Pressable style={[styles.btn2, styles.btn]} onPress={()=>setColor('vs_red')} />
                    <Pressable style={[styles.btn3, styles.btn]} onPress={()=>setColor('vs_black')} />
                    <Pressable style={[styles.btn4, styles.btn]} onPress={()=>setColor('vs_blue')} />
                </View>
                <Pressable 
                    style={styles.btnSecond}
                    onPress={() => navigation.navigate({
                        name: 'Screen_1', 
                        params: { color }, 
                        merge: true, 
                    })}
                > 
                    <Text style={styles.btn2_text}> XONG </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        justifyContent: 'flex-start'
    },

    header : {
        flexDirection: "row",
    },
    product_img : {
        width: 112, 
        height: 132, 
    },
    product_desc : {
        fontSize: 20, 
        fontWeight: 600, 
        marginLeft: 16, 
        marginTop: 16,
        marginRight: 16,
    },
    body : {
        backgroundColor: '#C4C4C4',
        width: '100%', 
        height: '100%',
        padding: 16, 
        paddingBottom: 0,
    },
    body_title : {
        fontSize: 20, 
        fontWeight: 600,
    },
    group_btn : {
        flexDirection: "column",
        alignItems: 'center',
    },
    btn : { 
        width: 85, 
        height: 80, 
        marginTop: 16,
    },
    btn1 : {
        backgroundColor: '#c5f1fb'
    },
    btn2 : {
        backgroundColor: '#f30d0d'
    },
    btn3 : {
        backgroundColor: '#000'
    },
    btn4 : {
        backgroundColor: '#234896'
    },


    btnSecond : {
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        width: '100%', 
        height: 50, 
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
        bottom: -20,
    },
    btn2_text : {
        color: '#fff',
        fontSize: 20, 
        fontWeight: 600,
    }
});
export default Screen_2; 