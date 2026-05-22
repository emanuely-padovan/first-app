import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Home</Text>
        <Button title="Ir para tela de Detalhes" onPress={() => navigation.navigate("Detalhes", {
        titulo: "Pedido 1",
        descricao: "Lasanha",
      })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 24,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
