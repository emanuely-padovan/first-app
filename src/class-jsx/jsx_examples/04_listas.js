import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {
    const frutas = ["Maçã", "Laranja", "Manga", "Bergamota"];
    const usuarios = [
        {id: 3, nome: "Emanuely Macedo", nota: 9.8},
        {id: 1, nome: "Lívia Hermano", nota: 10},
        {id: 2, nome: "Yasmin Vitória", nota: 9.9},
    ];

    return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 5 - Map de Frutas</Text>
            <Text style={styles.subtitulo}>Map Padrão</Text>
            {frutas.map((frutas, indice) => (
                <Text key={indice}>
                    {indice + 1} - {frutas}
                </Text>
            ))}
        </View>

        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 6 - Map de Objetos</Text>
            <Text style={styles.subtitulo}>Map Padrão</Text>
            {usuarios.map((usuarios) => (
                <Text key={usuarios.id}>
                    {usuarios.nome} - {usuarios.nota}
                </Text>
            ))}
        </View>

        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 7 - Map com Filter</Text>
            <Text style={styles.subtitulo}>Map Padrão</Text>
            {usuarios
            .filter((usuarios) => usuarios.nota >= 7)
            .map((usuarios) => (
                <Text key={usuarios.id}>Aprovado: {usuarios.nome}</Text>
            ))}
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