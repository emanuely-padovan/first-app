import { View, Text, StyleSheet } from "react-native";

export default function PerfilAluno(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>Nome: {props.nome}</Text>
            <Text style={styles.turma}>Turma: {props.turma}</Text>
            <Text style={styles.matricula}>Matrícula: {props.matricula}</Text>
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
    },
    turma: {
        fontSize: 14,
        color: "gray"
    },
    matricula: {
        fontSize: 10,
        color: 'gray'
    }
})