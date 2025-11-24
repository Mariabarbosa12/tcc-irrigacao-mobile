import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundomobile.png';
import voltar from '../../../assets/voltar.png';

import styles from './styles';

export default function Termos({ navigation }) {
 

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={fundo} resizeMode="stretch" style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>  navigation.navigate("Home")}
          >
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>
          <Image source={logo} style={styles.logoHeader} />
          <Text style={styles.logoText}>BLUVA</Text>
        </View>

        {/* Container */}
        <View style={styles.chartContainerBox}>
          <Text style={styles.title}>CONSUMO DE AGUA</Text>

  
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
