import { useState, useEffect } from "react";
import { Alert, StyleSheet, View, Text, Button } from "react-native";

export default function TelaMoeda() {
    const [moedas, setMoeda] = useState(0);

    useEffect(() => {
        if (moedas === 67) {
            Alert.alert('FARMOU AURA!', 'Eu faço o six, você faz o: ???');
        }
    }, [moedas]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Moedas coletadas: {moedas}</Text>

            <View style={styles.botao}>
                <Button title="Pegar Moeda 🪙" onPress={() => setMoeda(moedas + 1)} />
            </View>

            <View style={styles.botao}>
                <Button title="Devolver Moeda 🪙" onPress={() => setMoeda(moedas - 1)} />
            </View>

            <View style={styles.botao}>
                <Button title="Resetar Moeda 🪙" onPress={() => setMoeda(0)} />
            </View>

            <View style={styles.botao}>
                <Button title="🪙" onPress={() => setMoeda(67)} />
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
        padding: 20,
    },
    titulo: {
        fontSize: 18,
        marginBottom: 20,
    },
    botao: {
        marginBottom: 10,
        width: '100%'
    },
});