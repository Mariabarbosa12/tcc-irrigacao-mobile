import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';

export default function Perfil() {
  return (
    <ImageBackground source={require('../../../assets/fundomobile.png')} style={styles.background}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => window.location.href='../home/home.html'}>
          <Image source={require('../../../assets/voltar.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>BLUVA</Text>
      </View>

      {/* CONTAINER */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>PERFIL DO USUÁRIO</Text>

          <View style={styles.cccontainer}>
            {/* SEÇÃO DE INFORMAÇÕES */}
            <View style={styles.infoSection}>
              <View style={styles.perfilInfo}>
                <Image source={require('../../../assets/usu.png')} style={styles.perfilFoto} />
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
              <TouchableOpacity style={styles.buttonS}><Text style={styles.buttonText}>SAIR DA CONTA</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
