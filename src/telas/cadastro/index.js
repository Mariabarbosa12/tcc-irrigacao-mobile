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

export default function Cadastro({ navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <ImageBackground source={fundo} resizeMode="cover" style={styles.container}>
      <View style={styles.cadastroContainer}>
        <Image source={usuarioImg} style={styles.imgUsu} />
        <Text style={styles.title}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#666"
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity
          style={styles.cadastroBtn}
          onPress={() => navigation.navigate('Home')} // simulando window.location.href
        >
          <Text style={styles.cadastroBtnText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
