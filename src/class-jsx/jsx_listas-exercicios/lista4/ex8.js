import { View, Text, StyleSheet } from "react-native";

export default function Exercicio08() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={styles.grayBox}></View>
                <View style={styles.container}>
                    <View style={{flexDirection: 'column', flex: 1, margin: 5, gap: 10}}>
                        <View style={styles.greenBox}></View>
                        <View style={styles.yellowBox}></View>
                        <View style={styles.blueBox}></View>
                    </View>
                </View>
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
    greenBox: {
        flex: 1,
        padding: 10,
        height: 80,
        width: 300,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    yellowBox: {
        flex: 1,
        padding: 10,
        height: 80,
        width: 300,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        flex: 1,
        padding: 10,
        height: 80,
        width: 300,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    grayBox: {
        width: 80,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
});