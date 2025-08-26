import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";

// Importação de imagens
import fundo from "../../../assets/fundomobile.png";
import voltar from "../../../assets/voltar.png";
import logo from "../../../assets/logo.png";
import enviar from "../../../assets/enviar.png";

export default function Chat({ navigation }) {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: "Olá, tudo bem?", tipo: "esquerda" },
    { id: 2, texto: "Oi! Tudo sim, e você?", tipo: "direita" },
  ]);

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return;

    setMensagens([
      ...mensagens,
      { id: Date.now(), texto: mensagem, tipo: "direita" },
    ]);
    setMensagem("");
  };

  return (
    <ImageBackground source={fundo} style={styles.background}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>

          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerTitle}>BLUVA</Text>
        </View>

        {/* Caixa de chat */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.chatBox}
        >
          <Text style={styles.chatHeader}>Nome Sobrenome</Text>

          <ScrollView style={styles.mensagensChat}>
            {mensagens.map((msg) => (
              <View
                key={msg.id}
                style={
                  msg.tipo === "direita"
                    ? styles.msgDireita
                    : styles.msgEsquerda
                }
              >
                <Text>{msg.texto}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Entrada */}
          <View style={styles.entradaChat}>
            <TextInput
              style={styles.input}
              value={mensagem}
              onChangeText={setMensagem}
              placeholder="Digite aqui..."
              placeholderTextColor="#333"
            />
            <TouchableOpacity style={styles.sendButton} onPress={enviarMensagem}>
              <Image source={enviar} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}
