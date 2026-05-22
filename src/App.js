import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/stack-navigation';
import BottomTabNavigator from './navigation/bottom-tab-navigation';
import DrawerNavigator from './navigation/drawer-navigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* Os navegadores ficam aqui dentro... */}

      {/*<StackNavigator/>*/}
      {/*<BottomTabNavigator/>*/}
      {/*<DrawerNavigator/>*/}
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