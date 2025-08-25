import React from 'react';
import { View, Text, Image, Button, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundomobile.png';
import voltar from '../../../assets/voltar.png';

import styles from './styles'; // Você pode adaptar o styles.js

export default function ConsumoAgua({ navigation }) {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
    datasets: [
      {
        data: [300, 250, 400, 350, 200, 150, 100],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(53, 57, 103, ${opacity})`, // cor das barras
    barPercentage: 0.85,
    labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={fundo} resizeMode="cover" style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>
          <Image source={logo} style={styles.logoHeader} />
          <Text style={styles.logoText}>BLUVA</Text>
        </View>

        {/* Container */}
        <View style={styles.chartContainerBox}>
          <Text style={styles.title}>CONSUMO DE ÁGUA</Text>

          <BarChart
            style={{ marginTop: 20 }}
            data={data}
            width={screenWidth - 60}
            height={350}
            chartConfig={chartConfig}
            fromZero
            showValuesOnTopOfBars
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
