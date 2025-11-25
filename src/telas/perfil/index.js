import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundomobile.png';
import voltar from '../../../assets/voltar.png';
import user from '../../../assets/usu.png'

export default function Perfil({ navigation }) {
  return (
    <ImageBackground source={fundo} resizeMode="stretch" style={styles.background}>
      {/* HEADER */}
      <View style={styles.header}>
            <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>BLUVA</Text>
      </View>

      {/* CONTAINER */}
      <View style={styles.todoContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>PERFIL DO USUÁRIO</Text>

          <View style={styles.cccontainer}>
            {/* SEÇÃO DE INFORMAÇÕES */}
            <View style={styles.infoSection}>
              <View style={styles.perfilInfo}>
                <Image source={user} style={styles.perfilFoto} />
                <View>
                  <Text style={styles.label}>APELIDO:</Text>
                  <TextInput style={styles.inputS} value="@Usuário123" editable={false} />
                </View>
              </View>

              <View style={styles.inputInfo}>
                <Text style={styles.label}>NOME:</Text>
                <TextInput style={styles.input} value="João Silva" editable={false} />

                <Text style={styles.label}>EMAIL:</Text>
                <TextInput style={styles.input} value="joao.silva@email.com" editable={false} />

                <Text style={styles.label}>TELEFONE:</Text>
                <TextInput style={styles.input} value="(11) 91234-5678" editable={false} />

                <Text style={styles.label}>SENHA:</Text>
                <TextInput style={styles.input} value="******" secureTextEntry editable={false} />
              </View>
            </View>

            {/* SEÇÃO DE BOTÕES */}
            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>ALTERAR FOTO DE PERFIL</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>ALTERAR APELIDO</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>ALTERAR DADOS PESSOAIS</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>EXCLUIR CONTA</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>SAIR DA CONTA</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
