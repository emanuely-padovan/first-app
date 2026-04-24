import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ContadorExample() {
    const [contador, setContador] = useState(0)

    return (
        <View style={styles.container}>
            <Text>{contador}</Text>
            <TouchableOpacity onPress={() => setContador((prev) => prev + 1)} style={styles.button}>
                <Text style={styles.text}>Clique para adicionar ao contador!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: '#4285f4',
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
    }
});