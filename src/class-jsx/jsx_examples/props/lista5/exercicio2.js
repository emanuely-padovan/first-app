import { View, Text, StyleSheet } from "react-native";

export default function CartaoUsuario({nome, email}) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>Nome: {nome}</Text>
            <Text style={styles.email}>Email: {email}</Text>
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
        fontWeight: 'bold',
        fontSize: 16,
    },
    email:{
        fontSize: 10,
    }
})
