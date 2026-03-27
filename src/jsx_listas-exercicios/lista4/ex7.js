import { View, Text, StyleSheet } from "react-native";

export default function Exercicio07() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', flex: 1, gap: 10}}>
                <View style={styles.redBox}></View>
                <View style={styles.greenBox}></View>
            </View>

            <View style={{flexDirection: 'row', flex: 1, gap: 10}}>
                <View style={styles.blueBox}></View>
                <View style={styles.yellowBox}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: 20,
        gap: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    redBox: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
});