import { View, Text, StyleSheet } from "react-native";

export default function Exercicio03() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", gap: 8, justifyContent: "space-between"}}>
                <View style={styles.redBox}></View>
                <View style={styles.greenBox}></View>
                <View style={styles.blueBox}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    redBox: {
        height: 70,
        width: 70,
        backgroundColor: "red",
    },
    greenBox: {
        height: 70,
        width: 70,
        backgroundColor: "green",
    },
    blueBox: {
        height: 70,
        width: 70,
        backgroundColor: "blue",
    },
});