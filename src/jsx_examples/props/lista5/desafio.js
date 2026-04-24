import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Desafio(props) {
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.button}>
                <Text>{props.titulo}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>{props.titulo}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        gap: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: "#e5e7eb"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    }
})