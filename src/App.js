import { StyleSheet, Text, View } from 'react-native';
import Recados from './hooks/emanuely-macedo-padovan-lista6/RecadosScaffold';

export default function App() {
  return (
    <Recados/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
    color: "white",
  }
});