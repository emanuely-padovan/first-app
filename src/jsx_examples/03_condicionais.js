import { View, Text, StyleSheet } from "react-native";

export default function Exemplo03() {
    const logado = true;
    const temNotificaçao = true;

    return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 3 - Condicionais</Text>
            <Text style={styles.subtitulo}>Ternário</Text>
            <Text>Status: {logado ? "Logado" : "Deslogado"}</Text>
        </View>

        <View style={styles.exemplo}>
            <Text style={styles.subtitulo}>Exemplo 4 - Operador &&</Text>
            <Text>Notificações:</Text>
            {temNotificaçao && <Text>Você tem novas notificações!</Text>}
            {!temNotificaçao && <Text>Nenhuma notificação</Text>}
        </View>

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
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4285f4",
        marginBottom: 8,
    },
    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
});