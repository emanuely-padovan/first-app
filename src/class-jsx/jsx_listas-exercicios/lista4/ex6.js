import { View, Text, StyleSheet } from "react-native";

export default function Exercicio06() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'column', flex: 1}}>
                <View style={styles.header}></View>
                <View style={styles.mainContent}></View>
                <View style={styles.footer}></View>
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
    header: {
        height: 60,
        width: 800,
        backgroundColor: "green",
    },
    mainContent: {
        flex: 1,
        backgroundColor: "gray",
    },
    footer: {
        height: 50,
        width: 800,
        backgroundColor: "blue",
    },
});