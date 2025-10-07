import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Entrada from './src/telas/entrada';
import Login from './src/telas/login';
import Cadastro from './src/telas/cadastro';
import Home from './src/telas/home';
import Grafico from './src/telas/grafico';
import Chat from './src/telas/chat';
import Perfil from './src/telas/perfil';
import PerfilTecnico from './src/telas/perfil tecn';
import Contatos from './src/telas/contatos';

export default function App() {
  return (
    <View style={styles.container}>
      <Grafico/>
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
