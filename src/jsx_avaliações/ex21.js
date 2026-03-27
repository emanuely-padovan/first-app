import { View, Text, StyleSheet } from "react-native";

export default function Exercicio21() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center', borderRadius: 8}}>
                <View style={[styles.header, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Header</Text>
                </View>
            </View>

            <View style={[styles.corpo, {flexDirection: 'row', borderRadius: 8, gap: 8}]}>
                <View style={[styles.sidebar, {borderRadius: 8, gap: 8}]}>
                    <Text style={styles.textStyle}>SideBar</Text>
                </View>

                <View style={[styles.areaPrincipal, {flexDirection: 'colunm', borderRadius: 8, gap: 8}]}>
                    <View style={[styles.secaoSuperior, {flexDirection: 'row', borderRadius: 8, gap: 8}]}>
                        <View style={styles.cardA}>
                            <Text style={styles.textStyle}>Card A</Text>
                        </View>
                        <View style={styles.cardB}>
                            <Text style={styles.textStyle}>Card B</Text>
                        </View>
                    </View>
                    <View style={styles.divisor}></View>
                    <View style={[styles.secaoInferior, {flexDirection: 'row', borderRadius: 8, gap: 8}]}>
                        <View style={styles.cardC}>
                            <Text style={styles.textStyle}>C</Text>
                        </View>
                        <View style={styles.cardD}>
                            <Text style={styles.textStyle}>Card D</Text>
                        </View>
                        <View style={styles.cardE}>
                            <Text style={styles.textStyle}>E</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', borderRadius: 8}}>
                <View style={[styles.header, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={styles.textStyle}>Footer</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        gap: 8,
        backgroundColor: "#1a1a1a",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        fontWeight: "bold",
    },
    header: {
        height: 60,
        width: '100%',
        borderRadius: 8,
        backgroundColor: "#2c3e50",
        alignItems: "center",
    },
    sidebar: {
        borderRadius: 8,
        height: '100%',
        width: 80,
        backgroundColor: "#95a5a6",
        alignItems: "center",
        justifyContent: "center",
    },
    corpo: {
        flex: 2,
        backgroundColor: "#black",
    },
    areaPrincipal: {
        flex: 1,
        height: '100%',
        backgroundColor: "#black",
    },
    secaoSuperior: {
        flex: 1,
    },
    secaoInferior: {
        flex: 1,
    },
    cardA: {
        flex: 1,
        borderRadius: 8,
        height: '100%',
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    cardB: {
        flex: 1,
        borderRadius: 8,
        height: '100%',
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    divisor: {
        height: 8,
        backgroundColor: "#34495e",
    },
    cardC: {
        flex: 1,
        borderRadius: 8,
        height: '100%',
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    cardD: {
        flex: 2,
        borderRadius: 8,
        height: '100%',
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    cardE: {
        flex: 1,
        borderRadius: 8,
        height: '100%',
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        width: 50,
        borderRadius: 8,
        backgroundColor: "#2c3e50",
        alignItems: "center",
    },
});