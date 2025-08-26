import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';

// Importação das imagens
const fundoMobile = require('../../../assets/fundomobile.png');
const logoImg = require('../../../assets/logo.png');
const voltarImg = require('../../../assets/voltar.png');
const usuarioImg = require('../../../assets/usu.png');

export default function Contatos({ navigation }) {
  return (
    <ImageBackground source={fundoMobile} style={styles.background}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => window.location.href='../home/home.html'}>
          <Image source={voltarImg} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.headerText}>BLUVA</Text>
      </View>

      {/* CONTAINER */}
      <View style={styles.container}>
        <Text style={styles.title}>CONTATOS</Text>

        <TouchableOpacity style={styles.contato} onPress={() => window.location.href='../chat/chat.html'}>
          <Image source={usuarioImg} style={styles.contatoIcon} />
          <Text style={styles.apelido}>@Usuario123</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
