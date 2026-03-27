import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercicio10 from './jsx_listas-exercicios/lista4/ex10';

export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio10/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 50,
    color: "white"
  }
});