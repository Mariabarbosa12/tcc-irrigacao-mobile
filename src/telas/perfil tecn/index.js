import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';

// Importação das imagens
const fundoMobile = require('../../../assets/fundomobile.png');
const logoImg = require('../../../assets/logo.png');
const perfilImg = require('../../../assets/usu.png');

export default function PerfilTecnico() {
  return (
    <ImageBackground source={fundoMobile} style={styles.background}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.headerText}>BLUVA</Text>
      </View>

      {/* CONTAINER */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>PERFIL DO TÉCNICO</Text>

          <View style={styles.cccontainer}>
            {/* SEÇÃO DE INFORMAÇÕES */}
            <View style={styles.infoSection}>
              <View style={styles.perfilInfo}>
                <Image source={perfilImg} style={styles.perfilFoto} />
                <View>
                  <Text style={styles.label}>APELIDO:</Text>
                  <TextInput style={styles.inputS} value="@Técnico123" editable={false} />
                </View>
              </View>

              <View style={styles.inputInfo}>
                <Text style={styles.label}>NOME:</Text>
                <TextInput style={styles.input} value="Joana Lima" editable={false} />

                <Text style={styles.label}>EMAIL:</Text>
                <TextInput style={styles.input} value="joanali@email.com" editable={false} />

                <Text style={styles.label}>NÚMERO DE TELEFONE:</Text>
                <TextInput style={styles.input} value="(11) 91234-1138" editable={false} />

                <Text style={styles.label}>SENHA:</Text>
                <TextInput style={styles.input} value="******" secureTextEntry editable={false} />
              </View>
            </View>

            {/* SEÇÃO DE BOTÕES */}
            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ALTERAR FOTO DE PERFIL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ALTERAR APELIDO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ALTERAR DADOS PESSOAIS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>EXCLUIR CONTA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonS}>
                <Text style={styles.buttonText}>SAIR DA CONTA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.greenButton}>
                <Text style={styles.buttonText}>IR PARA CONTATOS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
