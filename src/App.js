import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercicio21 from './jsx_avaliações/ex21';

export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio21 />
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