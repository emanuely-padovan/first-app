import { View, Text, StyleSheet } from "react-native";

export default function Exercicio10() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.header}></View>
            </View>

            <View style={{flexDirection: 'row'}}>
                    <View style={styles.box1}></View>
                    <View style={styles.box2}></View>
                    <View style={styles.box3}></View>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={styles.painel}></View>
                <View style={styles.lateral}></View>
            </View>

            <View style={{flexDirection: 'row', flex: 1, gap: 2}}>
                <View style={styles.header}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    header: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    box1: {
        height: 80,
        width: 80,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    box2: {
        height: 80,
        width: 80,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    box3: {
        height: 80,
        width: 80,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    painel: {
        height: 80,
        width: 80,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },
    lateral: {
        height: 80,
        width: 80,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        height: 80,
        width: 80,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});