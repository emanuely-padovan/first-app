import { View, Text, StyleSheet } from "react-native";

export default function Exercicio20() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={[styles.banner, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Promoção</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 8, borderRadius: 8}}>
                <View style={[styles.cardA, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Card A</Text>
                </View>
                <View style={[styles.cardB, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Card B</Text>
                </View>
                <View style={[styles.cardC, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Card C</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1}}>
                <View style={[styles.destaque, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Destaque</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 8, borderRadius: 8}}>
                <View style={[styles.cat1, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Cat 1</Text>
                </View>
                <View style={[styles.cat2, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Cat 2</Text>
                </View>
                <View style={[styles.cat3, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>cat 3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        gap: 8,
        backgroundColor: "#ecf0f1",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        fontWeight: "bold",
    },
    banner: {
        padding: 10, 
        height: 80,
        width: '100%',
        borderRadius: 8,
        backgroundColor: "#e74c3c",
        alignItems: "center",
    },
    cardA: {
        flex: 1,
        borderRadius: 8,
        height: 150,
        backgroundColor: "#2ecc71",
        alignItems: "center",
        justifyContent: "center",
    },
    cardB: {
        flex: 1,
        borderRadius: 8,
        height: 150,
        backgroundColor: "#3498db",
        alignItems: "center",
        justifyContent: "center",
    },
    cardC: {
        flex: 2,
        borderRadius: 8,
        height: 150,
        backgroundColor: "#f39c12",
        alignItems: "center",
        justifyContent: "center",
    },
    destaque: {
        flex: 1,
        padding: 10, 
        borderRadius: 8,
        backgroundColor: "#2c3e50",
        alignItems: "center",
    },
    cat1: {
        flex: 1,
        borderRadius: 8,
        height: 150,
        backgroundColor: "#9b59b6",
        alignItems: "center",
        justifyContent: "center",
    },
    cat2: {
        flex: 1,
        borderRadius: 8,
        height: 150,
        backgroundColor: "#1abc9c",
        alignItems: "center",
        justifyContent: "center",
    },
    cat3: {
        flex: 1,
        borderRadius: 8,
        height: 150,
        backgroundColor: "#e67e22",
        alignItems: "center",
        justifyContent: "center",
    },
});