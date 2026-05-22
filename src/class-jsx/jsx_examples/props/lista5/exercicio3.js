import { View, Text, StyleSheet } from "react-native";

export default function CardSaudacao(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>Olá, {props.nome}! Bem-vindo(a).</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: "#e5e7eb"
    },
    nome: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})