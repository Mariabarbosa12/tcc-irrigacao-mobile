import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Select,
  ImageBackground,
} from 'react-native';

import logo from '../../../assets/logo.png'
import fundo from '../../../assets/fundomobile.png'


import styles from './styles';

export default function Entrada() {

  return (
    // <View style={styles.container}>
    <ImageBackground source={fundo} resizeMode="contain" style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.txtLogo}>BLUVA</Text>
      </View>

      {/* <select id="tipoUsuario">
        <option value="">Selecione</option>
        <option value="usuario">Usuário</option>
        <option value="tecnico">Técnico</option>
      </select> */}
      {/* <button onclick="window.location.href='../login/login.html'">Prosseguir</button> */}
    </ImageBackground>
    // </View>
  );
}
