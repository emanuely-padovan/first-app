import { View, Text, StyleSheet } from "react-native";

export default function ViewScaffold() {
    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Exemplos - View e Flexbox</Text>
        <View style={styles.exemplo}>
            <Text>FlexBox - Colunas</Text>
            <View style={{flexDirection: 'column', gap: 8}}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
        </View>
        <View style={styles.exemplo}>
            <Text>FlexBox - Linhas</Text>
            <View style={{
                flexDirection: 'row', 
                gap: 8
            }}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
        </View>
        
        <View style={styles.exemplo}>
            <Text>FlexBox - justifyContent</Text>
            <View style={{
                flexDirection: 'row', 
                gap: 8, 
                height: 60, 
                width: 140, 
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
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
    box: {
        width: 50,
        height: 50,
        backgroundColor: "#4285f4",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    textBox: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
});