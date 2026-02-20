import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo04 from './jsx_examples/04_listas';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cd12a7b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 50,
    color: "white"
  }
});