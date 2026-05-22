import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista01() {
    const linguagem = "JavaScript";
    const ano = 2025;

    const preco = 49.9;
    function formatarPreco() {
        return (
            <Text>R${preco}</Text>
        )
    }

    return (
        <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Lista 01 - Emanuely Macedo Padovan</Text>

        <View style={styles.card}>
            <Text style={styles.label}>Exercício 1 - View com Text</Text>
            <View>
                <Text>a. Olá...</Text>
                <Text>b. Mundo! 🌏</Text>
            </View>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Exercício 2 - Variáveis no JSX</Text>
            <View>
                <Text style={styles.language}>a. Linguagem:{linguagem}</Text>
                <Text style={styles.year}>b. Ano: {ano}</Text>
            </View>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Exercício 3 - Funções no JSX</Text>
            <View>
                <Text>Preço - {formatarPreco()}</Text>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#F5F5F5", 
        paddingTop: 60 
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#212121",
    },
    card: {
        backgroundColor: "#FFF",
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1565C0",
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingBottom: 8,
    },
    texto: { fontSize: 14, 
        color: "#424242", 
        lineHeight: 22 
    },
    language: {
        color: "#ffdd00"
    },
    year: {
        color: "#1003ff"
    }
});