import { View, Text, StyleSheet } from "react-native";

export default function Exercicio05() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', flex: 1, gap: 8, width: '100%'}}>
                <View style={styles.redBox}></View>
                <View style={styles.greenBox}></View>
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
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    greenBox: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});