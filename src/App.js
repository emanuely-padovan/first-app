import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/stack-navigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* Os navegadores ficam aqui dentro... */}
      <StackNavigator/>
    </NavigationContainer>
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