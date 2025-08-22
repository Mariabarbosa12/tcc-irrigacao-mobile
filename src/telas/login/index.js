import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import fundo from '../../../assets/fundimobile.png';
import usuarioImg from '../../../assets/usu.png';

import styles from './styles';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ImageBackground source={fundo} resizeMode="cover" style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={usuarioImg} style={styles.imgUsu} />
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário ou e-mail"
          placeholderTextColor="#666"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Home')} // aqui simula o window.location.href
        >
          <Text style={styles.loginBtnText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.txt}>
          Não tem uma conta?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Cadastro')}
          >
            Cadastre-se
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
