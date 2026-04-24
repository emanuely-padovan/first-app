import { View, Text, StyleSheet } from "react-native";

export default function CardProduto(props) {
    return (
        <View style={styles.card}>
            <Text>Produtos: {props.produto}</Text>
            <Text>Preço: R${props.preco}</Text>
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
    }
})