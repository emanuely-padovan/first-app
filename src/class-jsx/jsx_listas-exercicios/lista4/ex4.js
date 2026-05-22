import { View, Text, StyleSheet } from "react-native";

export default function Exercicio04() {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.box}></View>
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
    box: {
        height: 120,
        width: 120,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
});