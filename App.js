import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Entrada from './src/telas/entrada';
import Login from './src/telas/login';
import Cadastro from './src/telas/cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
