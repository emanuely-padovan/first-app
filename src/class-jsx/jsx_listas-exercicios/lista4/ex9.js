import { View, Text, StyleSheet } from "react-native";

export default function Exercicio09() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={styles.preto}>
                    <View style={styles.bolaVermelha}></View>
                    <View style={styles.bolaAmarela}></View>
                    <View style={styles.bolaVerde}></View>
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
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    preto: {
        padding: 10, 
        height: 350,
        width: 200,
        borderRadius: 10,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    bolaVermelha: {
        borderRadius: 50,
        height: 100,
        width: 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    bolaAmarela: {
        borderRadius: 50,
        height: 100,
        width: 100,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    bolaVerde: {
        borderRadius: 50,
        height: 100,
        width: 100,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
});