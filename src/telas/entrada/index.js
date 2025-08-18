import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Select,
  ImageBackground,
} from 'react-native';

import styles from './styles';

export default function Entrada() {
  
  return (
    <ImageBackground
      source={require('../../assets/fundinho.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.iconButton}>
          <Image
            source={require('../../assets/logoredonda.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>BLUVA</Text>
        </View>

        <View style={styles.select}>
          <Select style={styles.select}>
              <option value="">Selecione</option>
          <option value="usuario">Usuário</option>
          <option value="tecnico">Técnico</option>
          </Select>
        </View>

        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.buttonPressed] : styles.button
          }
          onPress={handleProsseguir}
        >
          {({ pressed }) => (
            <Text
              style={
                pressed ? [styles.buttonText, styles.buttonTextPressed] : styles.buttonText
              }
            >
              Prosseguir
            </Text>
          )}
        </Pressable>
      </View>
    </ImageBackground>
  );
}
